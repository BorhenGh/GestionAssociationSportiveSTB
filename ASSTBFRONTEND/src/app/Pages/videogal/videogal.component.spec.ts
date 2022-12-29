import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogalComponent } from './videogal.component';

describe('VideogalComponent', () => {
  let component: VideogalComponent;
  let fixture: ComponentFixture<VideogalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
