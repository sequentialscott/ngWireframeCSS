import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

import { StyleGuideService } from '../../style-guide.service';


@Component({
  selector: 'sg-icons-topic',
  templateUrl: './icons-topic.component.html',
  styleUrls: ['./icons-topic.component.css']
})
export class IconsTopicComponent implements OnInit {
  @Input() topicListing: any;
  highlightedCode: HighlightResult;
  code: string;
  iconSet: string[];

  constructor(sgService: StyleGuideService) {
    this.iconSet = sgService.icons;
   }

  ngOnInit() {
    this.updateCode();
  }

  updateCode() {
    this.code =
    `
<span class="icon add${ this.topicListing.options.compact ? ' compact' : '' }"></span>
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
