import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Firestore,
  arrayRemove,
  arrayUnion,
  doc,
  getFirestore,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import { getFirebaseApp } from '../firebase-app';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private platformId = inject(PLATFORM_ID);
  private authService = inject(AuthService);
  private firestore: Firestore | null = null;
  private unsubscribeSnapshot: (() => void) | null = null;

  favoriteIds = signal<Set<string>>(new Set());

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.firestore = getFirestore(getFirebaseApp());

      effect(() => {
        const user = this.authService.currentUser();
        this.unsubscribeSnapshot?.();
        this.unsubscribeSnapshot = null;

        if (!user) {
          this.favoriteIds.set(new Set());
          return;
        }

        const userDocRef = doc(this.firestore!, 'users', user.uid);
        this.unsubscribeSnapshot = onSnapshot(userDocRef, (snapshot) => {
          const favorites = (snapshot.data()?.['favoriteIds'] as string[] | undefined) ?? [];
          this.favoriteIds.set(new Set(favorites));
        });
      });
    }
  }

  isFavorite(vestidoId: string): boolean {
    return this.favoriteIds().has(vestidoId);
  }

  async toggle(vestidoId: string): Promise<void> {
    const user = this.authService.currentUser();
    if (!user || !this.firestore) return;

    const alreadyFavorite = this.favoriteIds().has(vestidoId);
    this.updateLocalState(vestidoId, !alreadyFavorite);

    const userDocRef = doc(this.firestore, 'users', user.uid);
    try {
      await setDoc(
        userDocRef,
        { favoriteIds: alreadyFavorite ? arrayRemove(vestidoId) : arrayUnion(vestidoId) },
        { merge: true }
      );
    } catch (error) {
      this.updateLocalState(vestidoId, alreadyFavorite);
      console.error('No se pudo actualizar favoritos:', error);
    }
  }

  private updateLocalState(vestidoId: string, isFavorite: boolean): void {
    const next = new Set(this.favoriteIds());
    if (isFavorite) {
      next.add(vestidoId);
    } else {
      next.delete(vestidoId);
    }
    this.favoriteIds.set(next);
  }
}
