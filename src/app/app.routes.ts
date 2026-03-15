import { Routes } from '@angular/router';

import { HomePage } from './pages/home-page/home-page';
import { AboutUsPage } from './pages/about-us-page/about-us-page';
import { ProductsPage } from './pages/products-page/products-page';
import { ContactPage } from './pages/contact-page/contact-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'about-us', component: AboutUsPage },
  { path: 'products', component: ProductsPage },
  { path: 'contact', component: ContactPage },
];
