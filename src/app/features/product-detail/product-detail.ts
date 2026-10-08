import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Vestido, VESTIDOS } from '../../data/vestidos.data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  product = signal<Vestido | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const foundProduct = VESTIDOS.find(p => p.id === id);

    if (foundProduct) {
      this.product.set(foundProduct);
    }
  }
}
