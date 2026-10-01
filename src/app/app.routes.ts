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
    loadComponent: () => import('./features/product-detail/product-detail').then(m => m.ProductDetailComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/contact').then(m => m.Contact)
  },
  {
    path: 'novias',
    loadComponent: () => import('./features/brides/brides').then(m => m.BridesComponent)
  },
  {
  path: 'fiesta-collection',
  loadComponent: () => import('./features/fiesta-collection/fiesta-collection').then(m => m.FiestaCollection)
  },
  {
  path: 'fifteenth',
  loadComponent: () => import('./features/fifteenth/fifteenth').then(m => m.Fifteenth)
  },
  {
  path: 'collection',
  loadComponent: () => import('./features/collection/collection').then(m => m.Collection)
  },
  {
    path: '**',
    redirectTo: 'catalog'
  }
];
