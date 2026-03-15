import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturedCategories } from './fatured-categories';

describe('FaturedCategories', () => {
  let component: FaturedCategories;
  let fixture: ComponentFixture<FaturedCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaturedCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturedCategories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
