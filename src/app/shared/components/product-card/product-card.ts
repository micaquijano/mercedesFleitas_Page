import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vestido } from '../../../data/vestidos.data';
import { FavoritesService } from '../../../core/services/favorites.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  private favoritesService = inject(FavoritesService);
  private cartService = inject(CartService);

  vestido = input.required<Vestido>();

  isFavorite = computed(() => this.favoritesService.isFavorite(this.vestido().id));
  isInCart = computed(() => this.cartService.isInCart(this.vestido().id));

  onToggleCart(): void {
    this.cartService.toggle(this.vestido().id);
  }

  onToggleFavorite(): void {
    this.favoritesService.toggle(this.vestido().id);
  }
}
