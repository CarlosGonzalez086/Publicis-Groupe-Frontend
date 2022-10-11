import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneromusicalComponent } from './generomusical.component';

describe('GeneromusicalComponent', () => {
  let component: GeneromusicalComponent;
  let fixture: ComponentFixture<GeneromusicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneromusicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneromusicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
