import { Component, computed, inject, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vestido } from '../../../data/vestidos.data';
import { AuthService } from '../../../core/services/auth.service';
import { FavoritesService } from '../../../core/services/favorites.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  private authService = inject(AuthService);
  private favoritesService = inject(FavoritesService);

  vestido = input.required<Vestido>();
  addToCart = output<Vestido>();

  showLoginHint = signal(false);
  isFavorite = computed(() => this.favoritesService.isFavorite(this.vestido().id));

  onAddToCart(): void {
    this.addToCart.emit(this.vestido());
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
