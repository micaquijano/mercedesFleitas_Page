import { Component, OnInit, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Vestido, VESTIDOS } from '../../data/vestidos.data';
import { CartService } from '../../core/services/cart.service';

const WHATSAPP_NUMBER = '5491126723821';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);
  private cartService = inject(CartService);

  product = signal<Vestido | null>(null);
  isInCart = computed(() => {
    const current = this.product();
    return current ? this.cartService.isInCart(current.id) : false;
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const foundProduct = VESTIDOS.find(p => p.id === id);

    if (foundProduct) {
      this.product.set(foundProduct);
    }
  }

  onToggleCart(): void {
    const current = this.product();
    if (!current) return;
    this.cartService.toggle(current.id);
  }

  onConsult(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const current = this.product();
    if (!current) return;

    const message = `Hola! Me interesa el vestido "${current.name}" (${current.collection}, $${current.price}) y quisiera más información.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
