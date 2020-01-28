import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryInformationComponent } from './order-summary-information.component';

describe('OrderSummaryInformationComponent', () => {
  let component: OrderSummaryInformationComponent;
  let fixture: ComponentFixture<OrderSummaryInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSummaryInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
