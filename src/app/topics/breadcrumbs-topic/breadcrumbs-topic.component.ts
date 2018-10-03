import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sg-breadcrumbs-topic',
  templateUrl: './breadcrumbs-topic.component.html',
  styleUrls: ['./breadcrumbs-topic.component.css']
})
export class BreadcrumbsTopicComponent implements OnInit {
  @Input() topicListing: any;
  linkset = [
    { label: 'Home', link: '#' },
    { label: 'First Level', link: '#' },
    { label: 'Second Level', link: '#' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
