import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerufswahlUnterrichtsmaterialComponent } from './berufswahl-unterrichtsmaterial.component';

describe('BerufswahlUnterrichtsmaterialComponent', () => {
  let component: BerufswahlUnterrichtsmaterialComponent;
  let fixture: ComponentFixture<BerufswahlUnterrichtsmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerufswahlUnterrichtsmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerufswahlUnterrichtsmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
