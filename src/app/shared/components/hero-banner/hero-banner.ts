import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  imports: [RouterLink],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
})
export class HeroBannerComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  imageUrl = input.required<string>();
  ctaLabel = input<string>('Explorar Colección');
  ctaLink = input<string>('/catalog');
}
