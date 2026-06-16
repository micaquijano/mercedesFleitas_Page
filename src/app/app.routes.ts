import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Apuntamos a 'catalog' (sin .component) y cargamos la clase 'Catalog'
    loadComponent: () => import('./features/catalog/catalog').then(m => m.Catalog)
  }
];
