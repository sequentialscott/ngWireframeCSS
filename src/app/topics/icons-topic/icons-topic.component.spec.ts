import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTopicComponent } from './icons-topic.component';

describe('IconsTopicComponent', () => {
  let component: IconsTopicComponent;
  let fixture: ComponentFixture<IconsTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
