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

const STORAGE_KEY = 'mercedes-fleitas-favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private platformId = inject(PLATFORM_ID);
  private authService = inject(AuthService);
  private isBrowser = isPlatformBrowser(this.platformId);
  private firestore: Firestore | null = null;
  private unsubscribeSnapshot: (() => void) | null = null;

  favoriteIds = signal<Set<string>>(this.readFromStorage());

  constructor() {
    if (this.isBrowser) {
      this.firestore = getFirestore(getFirebaseApp());

      effect(() => {
        const user = this.authService.currentUser();
        this.unsubscribeSnapshot?.();
        this.unsubscribeSnapshot = null;

        if (!user) {
          this.favoriteIds.set(this.readFromStorage());
          return;
        }

        this.migrateLocalFavoritesToFirestore(user.uid);

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
    const alreadyFavorite = this.favoriteIds().has(vestidoId);
    this.updateLocalState(vestidoId, !alreadyFavorite);

    const user = this.authService.currentUser();
    if (!user) {
      this.writeToStorage();
      return;
    }

    const userDocRef = doc(this.firestore!, 'users', user.uid);
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

  private readFromStorage(): Set<string> {
    if (!this.isBrowser) return new Set();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
    } catch {
      return new Set();
    }
  }

  private writeToStorage(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.favoriteIds()]));
    } catch {
      // localStorage puede no estar disponible (modo privado, cuota excedida, etc.)
    }
  }

  private async migrateLocalFavoritesToFirestore(uid: string): Promise<void> {
    const localIds = this.readFromStorage();
    if (localIds.size === 0) return;

    const userDocRef = doc(this.firestore!, 'users', uid);
    try {
      await setDoc(userDocRef, { favoriteIds: arrayUnion(...localIds) }, { merge: true });
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('No se pudieron migrar los favoritos locales:', error);
    }
  }
}
