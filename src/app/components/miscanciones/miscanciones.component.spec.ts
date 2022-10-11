import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscancionesComponent } from './miscanciones.component';

describe('MiscancionesComponent', () => {
  let component: MiscancionesComponent;
  let fixture: ComponentFixture<MiscancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscancionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
