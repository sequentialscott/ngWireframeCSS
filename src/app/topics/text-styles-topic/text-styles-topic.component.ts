import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'sg-text-styles-topic',
  templateUrl: './text-styles-topic.component.html',
  styleUrls: ['./text-styles-topic.component.css']
})
export class TextStylesTopicComponent implements OnInit {
  @Input() topicListing: any;

  constructor() { }

  ngOnInit() {
  }

}
