import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface DetailedProduct {
  id: string;
  name: string;
  collection: string;
  price: number;
  imageUrl: string;
  description: string;
  fabrics: string[];
  details: string[];
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  product = signal<DetailedProduct | null>(null);

  // Tu base de datos interna con tus vestidos locales
  private mockProducts: DetailedProduct[] = [
    {
      id: '1',
      name: 'Aurora',
      collection: 'Nocturne Collection',
      price: 2400,
      imageUrl: '/images/Aurora.png',
      description: 'Un diseño etéreo de silueta sirena que evoca el romanticismo oscuro. Confeccionado artesanalmente para envolver la figura con gracia dramática.',
      fabrics: ['Seda rasada premium', 'Encaje de Chantilly importado', 'Tul nupcial ultra suave'],
      details: ['Mangas de encaje desmontables', 'Bustier estructurado con ballenas', 'Cola catedral de 1.5 metros']
    },
    {
      id: '2',
      name: 'Amelie',
      collection: 'Nocturne Collection',
      price: 3100,
      imageUrl: '/images/Amelie.png',
      description: 'Una pieza escultural de hombros caídos que celebra las líneas puras y el minimalismo sofisticado, ideal para una presencia imponente y memorable.',
      fabrics: ['Crepe de seda pesado', 'Forrería de satén elastizado'],
      details: ['Escote drapeado fluido', 'Ajuste corsetero interno invisible', 'Cierre oculto en espalda']
    },
    {
      id: '3',
      name: 'Victoria',
      collection: 'Atelier 2026',
      price: 4200,
      imageUrl: '/images/Victoria.png',
      description: 'Inspirado en la dualidad y el misterio teatral. Destaca por su impactante tajo lateral y un delicado juego de cintas entrelazadas en la espalda descubierta.',
      fabrics: ['Raso de seda italiano', 'Gasa de seda flotante'],
      details: ['Espalda abierta con lazo regulable', 'Tajo profundo estilizado', 'Falda con movimiento etéreo']
    }
  ];

  ngOnInit() {
    // Captura el parámetro :id de la URL de forma segura
    const id = this.route.snapshot.paramMap.get('id');
    const foundProduct = this.mockProducts.find(p => p.id === id);

    if (foundProduct) {
      this.product.set(foundProduct);
    }
  }
}
