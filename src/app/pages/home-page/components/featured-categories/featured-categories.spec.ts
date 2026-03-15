import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCategories } from './featured-categories';

describe('FaturedCategories', () => {
  let component: FeaturedCategories;
  let fixture: ComponentFixture<FeaturedCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCategories],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedCategories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
