import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagealbumComponent } from './imagealbum.component';

describe('ImagealbumComponent', () => {
  let component: ImagealbumComponent;
  let fixture: ComponentFixture<ImagealbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagealbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagealbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
