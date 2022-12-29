import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangervideoaccComponent } from './changervideoacc.component';

describe('ChangervideoaccComponent', () => {
  let component: ChangervideoaccComponent;
  let fixture: ComponentFixture<ChangervideoaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangervideoaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangervideoaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
