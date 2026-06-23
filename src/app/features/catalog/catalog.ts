import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';

// Mantenemos tus interfaces existentes
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
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})

export class Catalog implements OnInit, OnDestroy {

  // 1. GESTIÓN DEL SLIDER EDITORIAL DE PANTALLA COMPLETA (Vertical)
  // Rastrear qué gran sección (Novias, Quince, Fiesta) está visible.
  currentEditorialSectionIndex = signal<number>(0);

  // Definimos tus grandes secciones en un Signal para usar en el HTML
  editorialSections = signal<any[]>([
    { id: 'novias', title: 'Novias', imageUrl: 'images/BannerNovias.png' },
    { id: 'quince', title: 'Quinceañeras', imageUrl: 'images/BannerQuinceañearas.png' },
    { id: 'fiesta', title: 'Fiesta Collection', imageUrl: 'images/BannerVestidoFiesta.png' }
  ]);

  // Guardamos la referencia del temporizador automático
  private autoPlaySectionsTimer: any;

  ngOnInit(): void {
    this.startEditorialAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopEditorialAutoPlay();
  }

  // --- CONTROL DEL AUTOMÁTICO ---
  startEditorialAutoPlay(): void {
    // Cambia automáticamente cada 6000 milisegundos (6 segundos)
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

  // Si el usuario hace click manualmente, reseteamos el tiempo para que no salte de golpe
  onManualNavigation(): void {
    this.goToNextEditorialSection();
    this.stopEditorialAutoPlay();
    this.startEditorialAutoPlay();
  }

  openCollectionInNewTab(categoryUrl: string): void {
    window.open(`/catalog?category=${categoryUrl}`, '_blank');
  }
}
