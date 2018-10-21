import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderTopicComponent } from './placeholder-topic.component';

describe('PlaceholderTopicComponent', () => {
  let component: PlaceholderTopicComponent;
  let fixture: ComponentFixture<PlaceholderTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
