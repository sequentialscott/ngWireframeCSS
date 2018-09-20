import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsTopicComponent } from './panels-topic.component';

describe('PanelsTopicComponent', () => {
  let component: PanelsTopicComponent;
  let fixture: ComponentFixture<PanelsTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
