import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'sg-tooltip-topic',
  templateUrl: './tooltip-topic.component.html',
  styleUrls: ['./tooltip-topic.component.css']
})
export class TooltipTopicComponent implements OnInit {
  @Input() topicListing: any;
  code: string;
  highlightedCode: HighlightResult;

  constructor() { }

  ngOnInit() {
    this.updateCode();
  }

  updateCode() {
    this.code =
    `
<p>Hover over the <strong><span sgTooltipTrigger="sampleTip">bold words</span></strong> to see a tooltip.</p>
<sg-tooltip tooltipId="sampleTip">
    <p>Any HTML can go in here.  Any HTML element can trigger a tooltip.</p>
    <hr>
    <p>Yep, multiple elements even.  It's only 25rem wide, though.</p>
</sg-tooltip>
  `;
  }

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
