import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficViolationComponent } from './traffic-violation.component';

describe('TrafficViolationComponent', () => {
  let component: TrafficViolationComponent;
  let fixture: ComponentFixture<TrafficViolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficViolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficViolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
