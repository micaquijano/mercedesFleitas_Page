import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { CATEGORY_META, VESTIDOS, VestidoCategory } from '../../data/vestidos.data';

@Component({
  selector: 'app-catalog-view',
  imports: [ProductCardComponent],
  templateUrl: './catalog-view.html',
  styleUrl: './catalog-view.scss',
})
export class CatalogView {
  private route = inject(ActivatedRoute);

  private category = this.route.snapshot.data['category'] as VestidoCategory;

  meta = CATEGORY_META[this.category];
  vestidos = computed(() => VESTIDOS.filter((vestido) => vestido.category === this.category));
}
