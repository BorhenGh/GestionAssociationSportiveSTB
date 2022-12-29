import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigrammebComponent } from './organigrammeb.component';

describe('OrganigrammebComponent', () => {
  let component: OrganigrammebComponent;
  let fixture: ComponentFixture<OrganigrammebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganigrammebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigrammebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
