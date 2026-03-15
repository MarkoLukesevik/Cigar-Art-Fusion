import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { FeaturedCategories } from './components/featured-categories/featured-categories';

@Component({
  selector: 'app-home-page',
  imports: [Hero, FeaturedCategories],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
