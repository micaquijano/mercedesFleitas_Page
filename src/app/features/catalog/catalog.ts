import { Component, inject, signal } from '@angular/core';
import { UiProductCard } from '../../shared/components/ui-product-card/ui-product-card';
import { Router } from '@angular/router';


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
  styleUrl: './catalog.scss'
})
export class Catalog {
  private router = inject(Router);

  // 1. Datos del Slider
  heroSlides = signal([
    {
      title: 'NOCTURNE',
      subtitle: 'COLECCIÓN EXCLUSIVA 2026',
      description: 'Siluetas esculturales y romanticismo oscuro, diseñadas para envolver la figura con gracia dramática.',
      imageUrl: '/images/slider.png', // Podés usar la misma imagen o una de campaña de Elara
      productId: '1'
    },
    {
      title: 'ATELIER',
      subtitle: 'ALTA CONFECCIÓN',
      description: 'Diseños concebidos bajo el misterio teatral. Encajes importados y texturas premium hechas a mano.',
      imageUrl: '/images/odette.png', // Imagen de campaña de Odette
      productId: '3'
    }
  ]);

  // 2. Señal para controlar el índice del slide activo
  currentSlide = signal(0);

  dresses = signal([
    { id: '1', name: 'AURORA', collection: 'Colección Eterna', price: 2400, imageUrl: '/images/Aurora.png' },
    { id: '2', name: 'AMELIE', collection: 'Colección Eterna', price: 3100, imageUrl: '/images/Amelie.png' },
    { id: '3', name: 'VICTORIA', collection: 'Colección Eterna', price: 4200, imageUrl: '/images/Victoria.png' }
  ]);

  // Funciones para cambiar de slide
  nextSlide() {
    this.currentSlide.update(idx => (idx + 1) % this.heroSlides().length);
  }

  prevSlide() {
    this.currentSlide.update(idx => (idx - 1 + this.heroSlides().length) % this.heroSlides().length);
  }

  navigateToProduct(id: string) {
    this.router.navigate(['/product', id]);
  }
}
