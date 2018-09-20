import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStylesTopicComponent } from './text-styles-topic.component';

describe('TextStylesTopicComponent', () => {
  let component: TextStylesTopicComponent;
  let fixture: ComponentFixture<TextStylesTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextStylesTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextStylesTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
