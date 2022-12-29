import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoalbumComponent } from './videoalbum.component';

describe('VideoalbumComponent', () => {
  let component: VideoalbumComponent;
  let fixture: ComponentFixture<VideoalbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoalbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
