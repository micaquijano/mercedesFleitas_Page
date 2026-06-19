import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadComponent: () => import('./features/catalog/catalog').then(m => m.Catalog)
  },
  {
    path: 'product/:id',
    // Apunta al archivo .component e invoca a ProductDetailComponent
    loadComponent: () => import('./features/product-detail/product-detail').then(m => m.ProductDetailComponent)
  },
  {
    path: '**',
    redirectTo: 'catalog'
  }
];
