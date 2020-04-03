import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShipmentsComponent } from './manage-shipments.component';

describe('ManageShipmentsComponent', () => {
  let component: ManageShipmentsComponent;
  let fixture: ComponentFixture<ManageShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
