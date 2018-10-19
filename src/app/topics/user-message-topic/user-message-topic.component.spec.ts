import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageTopicComponent } from './user-message-topic.component';

describe('UserMessageTopicComponent', () => {
  let component: UserMessageTopicComponent;
  let fixture: ComponentFixture<UserMessageTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMessageTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessageTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
