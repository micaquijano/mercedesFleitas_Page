import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { AuthService } from '../../core/services/auth.service';
import { FavoritesService } from '../../core/services/favorites.service';
import { VESTIDOS, Vestido } from '../../data/vestidos.data';

@Component({
  selector: 'app-favorites-view',
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './favorites-view.html',
  styleUrl: './favorites-view.scss',
})
export class FavoritesView {
  private authService = inject(AuthService);
  private favoritesService = inject(FavoritesService);

  isLoggedIn = computed(() => !!this.authService.currentUser());
  favoriteVestidos = computed<Vestido[]>(() =>
    VESTIDOS.filter((vestido) => this.favoritesService.isFavorite(vestido.id))
  );

  onAddToCart(vestido: Vestido): void {
    console.log('Agregado al carrito (pendiente de implementar):', vestido.name);
  }
}
