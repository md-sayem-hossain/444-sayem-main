import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSixLehrComponent } from './step-six-lehr.component';

describe('StepSixLehrComponent', () => {
  let component: StepSixLehrComponent;
  let fixture: ComponentFixture<StepSixLehrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSixLehrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSixLehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
