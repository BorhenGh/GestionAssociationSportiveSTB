import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatcatComponent } from './resultatcat.component';

describe('ResultatcatComponent', () => {
  let component: ResultatcatComponent;
  let fixture: ComponentFixture<ResultatcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
