import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListTopicComponent } from './link-list-topic.component';

describe('LinkListTopicComponent', () => {
  let component: LinkListTopicComponent;
  let fixture: ComponentFixture<LinkListTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkListTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
