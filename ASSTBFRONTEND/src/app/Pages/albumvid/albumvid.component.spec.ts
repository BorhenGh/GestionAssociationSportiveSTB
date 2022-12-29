import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumvidComponent } from './albumvid.component';

describe('AlbumvidComponent', () => {
  let component: AlbumvidComponent;
  let fixture: ComponentFixture<AlbumvidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumvidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumvidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
