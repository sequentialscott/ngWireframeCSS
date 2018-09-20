import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sg-tooltip-topic',
  templateUrl: './tooltip-topic.component.html',
  styleUrls: ['./tooltip-topic.component.css']
})
export class TooltipTopicComponent implements OnInit {
  @Input() topicListing: any;

  constructor() { }

  ngOnInit() {
  }

}
