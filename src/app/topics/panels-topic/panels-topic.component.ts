import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

import { StyleGuideService } from '../../style-guide.service';

@Component({
  selector: 'sg-panels-topic',
  templateUrl: './panels-topic.component.html',
  styleUrls: ['./panels-topic.component.css']
})
export class PanelsTopicComponent implements OnInit {
  @Input() topicListing: any;
  code: string;
  colors: string[];
  highlightedCode: HighlightResult;
  snippets: any;

    updateCode() {
      this.snippets = {
        header:
  `<div class="panel-heading ${ this.topicListing.options.headingColor }">
    <h4>Panel Heading</h4>
  </div>`,
        footer:
  `<div class="panel-footer ${ this.topicListing.options.footerColor }">
    You could stick a status bar down here. Or totals.
  </div>`
      };


      this.code = `
<div class="panel${ this.topicListing.options.drawn ? ' drawn' : '' }>
  ${ this.topicListing.options.showHeader ? this.snippets.header : '<!-- No heading -->' }
  <div class="panel-body ${ this.topicListing.options.bodyColor }">
    <p>The panels follow the same format as Bootstrap, in case that helps you.</p>
  </div>
  ${ this.topicListing.options.showFooter ? this.snippets.footer : '<!-- No Footer -->' }
</div>
      `;
    }

  constructor(private sgService: StyleGuideService) { }

  ngOnInit() {
    this.colors = this.sgService.colors;
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
