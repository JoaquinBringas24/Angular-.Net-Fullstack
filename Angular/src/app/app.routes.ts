import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'shop',
    loadComponent: () =>
      import('./shop/shop.component').then((mod) => mod.ShopComponent),
  },
  {
    path: 'shop/:id',
    loadComponent: () =>
      import('./shop/product-details/product-details.component').then(
        (mod) => mod.ProductDetailsComponent
      ),
    data: { breadcrumb: { alias: 'productDetails' } },
  },
  {
    path: 'basket',
    loadComponent: () =>
      import('./basket/basket.component').then((mod) => mod.BasketComponent),
    component: BasketComponent,
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./checkout/checkout.component').then(
        (mod) => mod.CheckoutComponent
      ),
    component: CheckoutComponent,
  },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];
