import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFourLehrComponent } from './step-four-lehr.component';

describe('StepFourLehrComponent', () => {
  let component: StepFourLehrComponent;
  let fixture: ComponentFixture<StepFourLehrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFourLehrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFourLehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
