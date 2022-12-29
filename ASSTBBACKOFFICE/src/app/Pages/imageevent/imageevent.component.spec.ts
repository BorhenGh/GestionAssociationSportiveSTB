import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageeventComponent } from './imageevent.component';

describe('ImageeventComponent', () => {
  let component: ImageeventComponent;
  let fixture: ComponentFixture<ImageeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
