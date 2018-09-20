import { Component, OnInit, Input } from '@angular/core';

import { Listing } from '../style-guide.service';

@Component({
  selector: 'sg-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() topicListing: Listing;

  constructor() { }

  ngOnInit() {
  }

}
