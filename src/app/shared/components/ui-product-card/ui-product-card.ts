import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-ui-product-card',
  imports: [RouterLink],
  templateUrl: './ui-product-card.html',
  styleUrl: './ui-product-card.scss',
})
export class UiProductCard {
  @Input() product: any;
}

