import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFiveSchnComponent } from './step-five-schn.component';

describe('StepFiveSchnComponent', () => {
  let component: StepFiveSchnComponent;
  let fixture: ComponentFixture<StepFiveSchnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFiveSchnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFiveSchnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
