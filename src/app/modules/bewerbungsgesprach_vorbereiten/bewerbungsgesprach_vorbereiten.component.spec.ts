import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewerbungsgesprachComponent } from './bewerbungsgesprach_vorbereiten.component';

describe('BewerbungsgesprachComponent', () => {
  let component: BewerbungsgesprachComponent;
  let fixture: ComponentFixture<BewerbungsgesprachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BewerbungsgesprachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BewerbungsgesprachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
