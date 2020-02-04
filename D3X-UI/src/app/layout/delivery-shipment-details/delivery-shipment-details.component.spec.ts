import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryShipmentDetailsComponent } from './delivery-shipment-details.component';

describe('DeliveryShipmentDetailsComponent', () => {
  let component: DeliveryShipmentDetailsComponent;
  let fixture: ComponentFixture<DeliveryShipmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryShipmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryShipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
