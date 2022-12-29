import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutersportComponent } from './ajoutersport.component';

describe('AjoutersportComponent', () => {
  let component: AjoutersportComponent;
  let fixture: ComponentFixture<AjoutersportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutersportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutersportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
