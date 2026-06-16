import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-product-card',
  imports: [],
  templateUrl: './ui-product-card.html',
  styleUrl: './ui-product-card.scss',
})
export class UiProductCard {
  @Input() product: any;
}

