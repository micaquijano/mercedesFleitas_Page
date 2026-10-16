import { Component, PLATFORM_ID, computed, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { CATEGORY_META, VESTIDOS, Vestido } from '../../data/vestidos.data';

const WHATSAPP_NUMBER = '5491126723821';

@Component({
  selector: 'app-cart-view',
  imports: [RouterLink],
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.scss',
})
export class CartView {
  private platformId = inject(PLATFORM_ID);
  private cartService = inject(CartService);

  cartVestidos = computed<Vestido[]>(() =>
    this.cartService
      .cartIds()
      .map((id) => VESTIDOS.find((vestido) => vestido.id === id))
      .filter((vestido): vestido is Vestido => !!vestido)
  );

  total = computed(() => this.cartVestidos().reduce((sum, vestido) => sum + vestido.price, 0));

  categoryTitle(vestido: Vestido): string {
    return CATEGORY_META[vestido.category].title;
  }

  onRemove(vestidoId: string): void {
    this.cartService.remove(vestidoId);
  }

  onCheckout(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const items = this.cartVestidos();
    if (items.length === 0) return;

    const lines = items.map((vestido) => `• ${vestido.name} – ${vestido.collection ?? this.categoryTitle(vestido)} – $${vestido.price}`);
    const message =
      `Hola! Quiero consultar por estas piezas:\n\n` +
      lines.join('\n') +
      `\n\nTotal de referencia: $${this.total()} (sujeto a confirmación en el taller)`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
