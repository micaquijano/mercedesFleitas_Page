import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getFirebaseApp } from '../firebase-app';

const ERROR_MESSAGES: Record<string, string> = {
  'auth/invalid-credential': 'El email o la contraseña son incorrectos.',
  'auth/email-already-in-use': 'Ya existe una cuenta registrada con ese email.',
  'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  'auth/invalid-email': 'El email ingresado no es válido.',
  'auth/popup-closed-by-user': 'Se cerró la ventana de Google antes de completar el inicio de sesión.',
  'auth/network-request-failed': 'No se pudo conectar. Revisá tu conexión a internet.',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private auth: Auth | null = null;

  currentUser = signal<User | null>(null);
  isLoading = signal(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.auth = getAuth(getFirebaseApp());
      onAuthStateChanged(this.auth, (user) => {
        this.currentUser.set(user);
        this.isLoading.set(false);
      });
    } else {
      this.isLoading.set(false);
    }
  }

  async registerWithEmail(name: string, email: string, password: string): Promise<void> {
    const auth = this.requireAuth();
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credential.user, { displayName: name });
    } catch (error) {
      throw new Error(this.friendlyMessage(error));
    }
  }

  async loginWithEmail(email: string, password: string): Promise<void> {
    const auth = this.requireAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(this.friendlyMessage(error));
    }
  }

  async loginWithGoogle(): Promise<void> {
    const auth = this.requireAuth();
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      throw new Error(this.friendlyMessage(error));
    }
  }

  async logout(): Promise<void> {
    if (!this.auth) return;
    await signOut(this.auth);
  }

  private requireAuth(): Auth {
    if (!this.auth) {
      throw new Error('La autenticación solo está disponible en el navegador.');
    }
    return this.auth;
  }

  private friendlyMessage(error: unknown): string {
    const code = (error as { code?: string })?.code ?? '';
    return ERROR_MESSAGES[code] ?? 'Ocurrió un error inesperado. Intentá nuevamente.';
  }
}
