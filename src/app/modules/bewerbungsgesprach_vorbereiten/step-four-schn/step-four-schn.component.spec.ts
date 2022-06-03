import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFourSchnComponent } from './step-four-schn.component';

describe('StepThreeSchnComponent', () => {
  let component: StepFourSchnComponent;
  let fixture: ComponentFixture<StepFourSchnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFourSchnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFourSchnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
