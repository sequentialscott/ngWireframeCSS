import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'sg-collapse-topic',
  templateUrl: './collapse-topic.component.html',
  styleUrls: ['./collapse-topic.component.css']
})
export class CollapseTopicComponent implements OnInit {
  @Input() topicListing: any;
  highlightedCode: HighlightResult;
  code = `
<sg-collapse>
  <div collapse-header>
    <h3>This is the Title to Click...</h3>
  </div>
  <div>
    <p>... and whatever should be collapsed goes here. You can nest collapsible sections within one another.</p>
    <sg-collapse collapsed compact>
      <div collapse-header>
        <h5>Look! A Subheading!</h5>
      </div>
      <div>
        <p>With its very own subheading content.</p>
      </div>
    </sg-collapse>
  </div>
</sg-collapse>
`;

  constructor() { }

  ngOnInit() {
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
