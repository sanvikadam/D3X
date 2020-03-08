import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderQuoteComponent } from './order-quote.component';

describe('OrderQuoteComponent', () => {
  let component: OrderQuoteComponent;
  let fixture: ComponentFixture<OrderQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
