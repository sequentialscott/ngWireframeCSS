import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseTopicComponent } from './collapse-topic.component';

describe('CollapseTopicComponent', () => {
  let component: CollapseTopicComponent;
  let fixture: ComponentFixture<CollapseTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
