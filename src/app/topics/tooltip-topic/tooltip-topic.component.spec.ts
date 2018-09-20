import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipTopicComponent } from './tooltip-topic.component';

describe('TooltipTopicComponent', () => {
  let component: TooltipTopicComponent;
  let fixture: ComponentFixture<TooltipTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
