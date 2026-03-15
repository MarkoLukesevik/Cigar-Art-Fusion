import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOrderForm } from './custom-order-form';

describe('CustomOrderForm', () => {
  let component: CustomOrderForm;
  let fixture: ComponentFixture<CustomOrderForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomOrderForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOrderForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
