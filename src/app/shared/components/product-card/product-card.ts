import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vestido } from '../../../data/vestidos.data';
import { AuthService } from '../../../core/services/auth.service';
import { FavoritesService } from '../../../core/services/favorites.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  private authService = inject(AuthService);
  private favoritesService = inject(FavoritesService);
  private cartService = inject(CartService);

  vestido = input.required<Vestido>();

  showLoginHint = signal(false);
  isFavorite = computed(() => this.favoritesService.isFavorite(this.vestido().id));
  isInCart = computed(() => this.cartService.isInCart(this.vestido().id));

  onToggleCart(): void {
    this.cartService.toggle(this.vestido().id);
  }

  onToggleFavorite(): void {
    if (!this.authService.currentUser()) {
      this.showLoginHint.set(true);
      setTimeout(() => this.showLoginHint.set(false), 4000);
      return;
    }
    this.favoritesService.toggle(this.vestido().id);
  }
}
