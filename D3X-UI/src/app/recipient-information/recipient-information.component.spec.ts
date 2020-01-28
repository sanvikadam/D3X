import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientInformationComponent } from './recipient-information.component';

describe('RecipientInformationComponent', () => {
  let component: RecipientInformationComponent;
  let fixture: ComponentFixture<RecipientInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
