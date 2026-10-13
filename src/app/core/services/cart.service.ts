import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const STORAGE_KEY = 'mercedes-fleitas-cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  cartIds = signal<string[]>(this.readFromStorage());

  constructor() {
    if (this.isBrowser) {
      effect(() => {
        const ids = this.cartIds();
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
        } catch {
          // localStorage puede no estar disponible (modo privado, cuota excedida, etc.)
        }
      });
    }
  }

  isInCart(vestidoId: string): boolean {
    return this.cartIds().includes(vestidoId);
  }

  add(vestidoId: string): void {
    if (this.isInCart(vestidoId)) return;
    this.cartIds.set([...this.cartIds(), vestidoId]);
  }

  remove(vestidoId: string): void {
    this.cartIds.set(this.cartIds().filter((id) => id !== vestidoId));
  }

  toggle(vestidoId: string): void {
    this.isInCart(vestidoId) ? this.remove(vestidoId) : this.add(vestidoId);
  }

  clear(): void {
    this.cartIds.set([]);
  }

  private readFromStorage(): string[] {
    if (!this.isBrowser) return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  }
}
