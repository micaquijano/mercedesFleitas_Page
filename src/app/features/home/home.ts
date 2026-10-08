import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { VESTIDOS, Vestido } from '../../data/vestidos.data';

interface QuickAccessCollection {
  title: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroBannerComponent, ProductCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  quickAccessCollections: QuickAccessCollection[] = [
    { title: 'Novias', imageUrl: '/images/BannerNovias.png', link: '/novias' },
    { title: 'Quinceañeras', imageUrl: '/images/BannerQuinceañearas.png', link: '/fifteenth' },
    { title: 'Fiesta Collection', imageUrl: '/images/BannerVestidoFiesta.png', link: '/fiesta-collection' },
  ];

  featuredVestidos = computed<Vestido[]>(() => VESTIDOS.filter((vestido) => vestido.featured));

  onAddToCart(vestido: Vestido): void {
    console.log('Agregado al carrito (pendiente de implementar):', vestido.name);
  }
}
