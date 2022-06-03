import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSixSchnComponent } from './step-six-schn.component';

describe('StepSixSchnComponent', () => {
  let component: StepSixSchnComponent;
  let fixture: ComponentFixture<StepSixSchnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSixSchnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSixSchnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
