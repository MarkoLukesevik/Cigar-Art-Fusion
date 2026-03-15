import { Component } from '@angular/core';
import { CategoryCard } from '../category-card/category-card';

@Component({
  selector: 'app-featured-categories',
  imports: [CategoryCard],
  templateUrl: './featured-categories.html',
  styleUrl: './featured-categories.scss',
})
export class FeaturedCategories {}
