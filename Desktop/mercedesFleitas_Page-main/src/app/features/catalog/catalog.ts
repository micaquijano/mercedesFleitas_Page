import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  imports: [CommonModule, UiProductCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog implements OnInit, OnDestroy {

  // 1. GESTIÓN DEL SLIDER DE PANTALLA COMPLETA (Vertical)
  currentEditorialSectionIndex = signal<number>(0);

  // Tus imágenes y secciones originales se mantienen intactas
  editorialSections = signal<any[]>([
    { id: 'novias', title: 'Novias', imageUrl: 'images/BannerNovias.png' },
    { id: 'quince', title: 'Quinceañeras', imageUrl: 'images/BannerQuinceañearas.png' },
    { id: 'fiesta', title: 'Fiesta Collection', imageUrl: 'images/BannerVestidoFiesta.png' }
  ]);

  //GRILLA DE PRODUCTOS Colección 2026
  dresses = signal<Product[]>([
    { id: '1', name: 'Vestido Aurora', collection: 'Colección Eterna 2026', price: 120000, imageUrl: 'images/VestidoAurora.png' },
    { id: '2', name: 'Vestido Amelie', collection: 'Colección Eterna 2026', price: 150000, imageUrl: 'images/VestidoAmelie.png' },
    { id: '3', name: 'Vestido Victoria', collection: 'Colección Eterna 2026', price: 135000, imageUrl: 'images/VestidoVictoria.png' }
  ]);

  private autoPlaySectionsTimer: any;

  private plataform_id = inject(PLATFORM_ID)

  ngOnInit(): void {
    this.startEditorialAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopEditorialAutoPlay();
  }

  // --- CONTROL DEL AUTOMÁTICO ---
  startEditorialAutoPlay(): void {
    this.autoPlaySectionsTimer = setInterval(() => {
      this.goToNextEditorialSection();
    }, 6000);
  }

  stopEditorialAutoPlay(): void {
    if (this.autoPlaySectionsTimer) {
      clearInterval(this.autoPlaySectionsTimer);
    }
  }

  goToNextEditorialSection(): void {
    const totalSections = this.editorialSections().length;
    const currentIdx = this.currentEditorialSectionIndex();

    if (currentIdx < totalSections - 1) {
      this.currentEditorialSectionIndex.set(currentIdx + 1);
    } else {
      this.currentEditorialSectionIndex.set(0);
    }
  }

  onManualNavigation(): void {
    this.goToNextEditorialSection();
    this.stopEditorialAutoPlay();
    this.startEditorialAutoPlay();
  }

  openCollectionInNewTab(categoryUrl: string): void {
    if(isPlatformBrowser(this.plataform_id)){
      window.open(`/catalog?category=${categoryUrl}`, '_blank');
    }
  }

}
