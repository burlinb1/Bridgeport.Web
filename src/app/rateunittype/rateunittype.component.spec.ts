import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateUnitTypeComponent } from './rateunittype.component';

describe('RateunittypeComponent', () => {
  let component: RateUnitTypeComponent;
  let fixture: ComponentFixture<RateUnitTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateUnitTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateUnitTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
