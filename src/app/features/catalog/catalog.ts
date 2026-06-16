import { Component, signal } from '@angular/core';
import { UiProductCard } from '../../shared/components/ui-product-card/ui-product-card';


export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [UiProductCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  dresses = signal<Product[]>([
    {
      id: '1',
      name: 'ELARA',
      collection: 'Nocturne Collection',
      price: 2400,
      imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600'
    },
    {
      id: '2',
      name: 'SERAPHINA',
      collection: 'Nocturne Collection',
      price: 3100,
      imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600'
    },
    {
      id: '3',
      name: 'ODETTE',
      collection: 'Atelier 2026',
      price: 4200,
      imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600'
    }
  ]);

  navigateToProduct(productId: string) {
    console.log('Navegando al vestido de alta costura con ID:', productId);
  }
}
