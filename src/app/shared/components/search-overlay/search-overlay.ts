import { Component, PLATFORM_ID, computed, effect, inject, input, output, signal, viewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CATEGORY_META, VESTIDOS, Vestido } from '../../../data/vestidos.data';

const MAX_RESULTS = 6;

@Component({
  selector: 'app-search-overlay',
  imports: [RouterLink],
  templateUrl: './search-overlay.html',
  styleUrl: './search-overlay.scss',
})
export class SearchOverlayComponent {
  private platformId = inject(PLATFORM_ID);
  private searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  isOpen = input.required<boolean>();
  closed = output<void>();

  query = signal('');

  results = computed<Vestido[]>(() => {
    const term = this.query().trim().toLowerCase();
    if (!term) return [];
    return VESTIDOS.filter((vestido) => {
      const categoryTitle = CATEGORY_META[vestido.category].title.toLowerCase();
      const collection = (vestido.collection ?? '').toLowerCase();
      return (
        vestido.name.toLowerCase().includes(term) ||
        categoryTitle.includes(term) ||
        collection.includes(term)
      );
    }).slice(0, MAX_RESULTS);
  });

  constructor() {
    effect(() => {
      const open = this.isOpen();

      if (!isPlatformBrowser(this.platformId)) return;

      document.body.style.overflow = open ? 'hidden' : '';

      if (open) {
        queueMicrotask(() => this.searchInput()?.nativeElement.focus());
      } else {
        this.query.set('');
      }
    });
  }

  onQueryChange(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.onClose();
    }
  }

  onClose(): void {
    this.closed.emit();
  }
}
