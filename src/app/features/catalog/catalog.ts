import { Component, OnInit, OnDestroy, signal } from '@angular/core';
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
  styleUrl: './catalog.scss'
})
export class Catalog implements OnInit, OnDestroy {
  // 1. Control del Slider
  currentSlide = signal<number>(0);

  heroSlides = signal<any[]>([
    { title: 'NOCTURNE', subtitle: 'COLECCIÓN EXCLUSIVA 2026', description: 'Siluetas escultóricas y romanticismo oscuro, diseñadas para envolver la figura con gracia dramática.', imageUrl: 'images/Aurora.png', productId: '1' },
    { title: 'NOVIAS', subtitle: 'ALTA COSTURA', description: 'Diseños románticos y exclusivos hechos a medida.', imageUrl: 'images/Amelie.png', productId: '2' }
  ]);

  // 2. LA SOLUCIÓN: Agregamos el Signal 'dresses' con datos de prueba iniciales para que el @for funcione
  dresses = signal<Product[]>([
    { id: '1', name: 'Vestido Nocturne', collection: 'Colección Eterna 2026', price: 120000, imageUrl: 'images/Aurora.png' },
    { id: '2', name: 'Vestido Amelie', collection: 'Novias Alta Costura', price: 150000, imageUrl: 'images/Amelie.png' },
    { id: '3', name: 'Vestido Victoria', collection: 'Colección Eterna 2026', price: 135000, imageUrl: 'images/Victoria.png' }
  ]);

  private autoPlayTimer: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  nextSlide(): void {
    const total = this.heroSlides().length;
    if (total > 0) {
      this.currentSlide.update(idx => (idx + 1) % total);
    }
  }

  prevSlide(): void {
    const total = this.heroSlides().length;
    if (total > 0) {
      this.currentSlide.update(idx => (idx - 1 + total) % total);
    }
  }

  scrollToCatalog(): void {
    const sliderHeight = window.innerHeight - 80;
    window.scrollTo({
      top: sliderHeight,
      behavior: 'smooth'
    });
  }

  navigateToProduct(id: string): void {
    console.log('Navegando al producto:', id);
  }
}
