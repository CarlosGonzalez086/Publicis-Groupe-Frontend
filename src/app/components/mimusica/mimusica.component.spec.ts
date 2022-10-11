import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimusicaComponent } from './mimusica.component';

describe('MimusicaComponent', () => {
  let component: MimusicaComponent;
  let fixture: ComponentFixture<MimusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MimusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MimusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
