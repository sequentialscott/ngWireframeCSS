import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsTopicComponent } from './breadcrumbs-topic.component';

describe('BreadcrumbsTopicComponent', () => {
  let component: BreadcrumbsTopicComponent;
  let fixture: ComponentFixture<BreadcrumbsTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
