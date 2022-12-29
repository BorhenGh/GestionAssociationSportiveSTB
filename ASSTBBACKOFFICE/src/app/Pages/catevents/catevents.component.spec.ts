import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateventsComponent } from './catevents.component';

describe('CateventsComponent', () => {
  let component: CateventsComponent;
  let fixture: ComponentFixture<CateventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
