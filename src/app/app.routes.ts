import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Cuando la URL esté vacía...
    redirectTo: 'catalog', // ...redirigir automáticamente al catálogo
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadComponent: () => import('./features/catalog/catalog').then(m => m.Catalog)
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./features/product-detail/product-detail').then(m => m.ProductDetail)
  },
  {
    path: '**',
    redirectTo: 'catalog'
  }
];
