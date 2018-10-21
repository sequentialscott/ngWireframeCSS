import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'sg-placeholder-topic',
  templateUrl: './placeholder-topic.component.html',
  styleUrls: ['./placeholder-topic.component.css']
})
export class PlaceholderTopicComponent implements OnInit {
  @Input() topicListing: any;
  highlightedCode: HighlightResult;
  code = `
<div class="placeholder-container">
  <div class="p-container-1 placeholder"></div>
  <div class="p-container-2 placeholder"></div>
  <div class="p-container-3 placeholder"></div>
</div>
`;

  constructor() { }

  ngOnInit() { }

  onHighlight(e) {
    this.highlightedCode = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }
}
