import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFiveLehrComponent } from './step-five-lehr.component';

describe('StepFiveLehrComponent', () => {
  let component: StepFiveLehrComponent;
  let fixture: ComponentFixture<StepFiveLehrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFiveLehrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFiveLehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
