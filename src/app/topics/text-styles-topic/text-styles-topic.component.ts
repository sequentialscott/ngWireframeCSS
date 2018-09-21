import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';


@Component({
  selector: 'sg-text-styles-topic',
  templateUrl: './text-styles-topic.component.html',
  styleUrls: ['./text-styles-topic.component.css']
})
export class TextStylesTopicComponent implements OnInit {
  @Input() topicListing: any;
  code: string;
  highlightedCode: HighlightResult;


  updateCode() {
    this.code =
    `
<p class="note${ this.topicListing.options.compact ? ' compact' : '' }">This is a Note.</p>
<p class="instructions${ this.topicListing.options.compact ? ' compact' : '' }">These are instructions.</p>
<p>
  <span class="fieldHelp${ this.topicListing.options.compact ? ' compact' : '' }">This is some field-level help.</span>
</p>
<p>
  <span class="currentStatus${ this.topicListing.options.compact ? ' compact' : '' }">
    This is the current status.
  </span>
</p>
    `;
  }


  constructor() { }

  ngOnInit() {
    this.updateCode();
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
