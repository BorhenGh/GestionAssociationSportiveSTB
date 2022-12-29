import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsportComponent } from './showsport.component';

describe('ShowsportComponent', () => {
  let component: ShowsportComponent;
  let fixture: ComponentFixture<ShowsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
