import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRecipientDetailsComponent } from './customer-recipient-details.component';

describe('CustomerRecipientDetailsComponent', () => {
  let component: CustomerRecipientDetailsComponent;
  let fixture: ComponentFixture<CustomerRecipientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRecipientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRecipientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
