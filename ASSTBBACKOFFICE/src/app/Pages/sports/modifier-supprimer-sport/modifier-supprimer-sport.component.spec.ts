import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSupprimerSportComponent } from './modifier-supprimer-sport.component';

describe('ModifierSupprimerSportComponent', () => {
  let component: ModifierSupprimerSportComponent;
  let fixture: ComponentFixture<ModifierSupprimerSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSupprimerSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSupprimerSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
