import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { FavoritesService } from '../../core/services/favorites.service';
import { VESTIDOS, Vestido } from '../../data/vestidos.data';

@Component({
  selector: 'app-favorites-view',
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './favorites-view.html',
  styleUrl: './favorites-view.scss',
})
export class FavoritesView {
  private favoritesService = inject(FavoritesService);

  favoriteVestidos = computed<Vestido[]>(() =>
    VESTIDOS.filter((vestido) => this.favoritesService.isFavorite(vestido.id))
  );
}
