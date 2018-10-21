import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesTopicComponent } from './tables-topic.component';

describe('TablesTopicComponent', () => {
  let component: TablesTopicComponent;
  let fixture: ComponentFixture<TablesTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
