import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmShipmentComponent } from './confirm-shipment.component';

describe('ConfirmShipmentComponent', () => {
  let component: ConfirmShipmentComponent;
  let fixture: ComponentFixture<ConfirmShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
