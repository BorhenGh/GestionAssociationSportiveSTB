import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumimgComponent } from './albumimg.component';

describe('AlbumimgComponent', () => {
  let component: AlbumimgComponent;
  let fixture: ComponentFixture<AlbumimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
