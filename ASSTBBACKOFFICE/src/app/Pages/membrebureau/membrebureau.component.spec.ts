import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrebureauComponent } from './membrebureau.component';

describe('MembrebureauComponent', () => {
  let component: MembrebureauComponent;
  let fixture: ComponentFixture<MembrebureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembrebureauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrebureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
