import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Vestido {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-collection',
  imports: [CommonModule, RouterLink],
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection {
  protected collection = signal<Vestido[]>([
    { id: 'n1', name: 'Vestido Amelie', price: 150000, imageUrl: 'assets/images/amelie.jpg' },
    { id: 'n2', name: 'Vestido Juliette', price: 175000, imageUrl: 'assets/images/juliette.jpg' },
    { id: 'n3', name: 'Vestido Antoinette', price: 190000, imageUrl: 'assets/images/antoinette.jpg' },

  ]);
}
