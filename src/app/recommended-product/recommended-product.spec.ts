import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProduct } from './recommended-product';

describe('RecommendedProduct', () => {
  let component: RecommendedProduct;
  let fixture: ComponentFixture<RecommendedProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendedProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
