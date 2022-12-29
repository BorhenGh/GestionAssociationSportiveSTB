import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerecusComponent } from './messagerecus.component';

describe('MessagerecusComponent', () => {
  let component: MessagerecusComponent;
  let fixture: ComponentFixture<MessagerecusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagerecusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
