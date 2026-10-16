import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'catalog',
    loadComponent: () => import('./features/catalog-view/catalog-view').then(m => m.CatalogView),
    data: { category: 'collection-2026' }
  },
  {
    path: 'novias',
    loadComponent: () => import('./features/catalog-view/catalog-view').then(m => m.CatalogView),
    data: { category: 'novias' }
  },
  {
    path: 'fiesta-collection',
    loadComponent: () => import('./features/catalog-view/catalog-view').then(m => m.CatalogView),
    data: { category: 'fiesta-collection' }
  },
  {
    path: 'fifteenth',
    loadComponent: () => import('./features/catalog-view/catalog-view').then(m => m.CatalogView),
    data: { category: 'fifteenth' }
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
    path: 'carrito',
    loadComponent: () => import('./features/cart/cart-view').then(m => m.CartView)
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./features/favorites/favorites-view').then(m => m.FavoritesView)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
  },
  {
    path: 'registro',
    loadComponent: () => import('./features/auth/register/register').then(m => m.Register)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
