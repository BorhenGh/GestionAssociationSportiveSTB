import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotpresComponent } from './motpres.component';

describe('MotpresComponent', () => {
  let component: MotpresComponent;
  let fixture: ComponentFixture<MotpresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotpresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
