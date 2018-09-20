import { Component } from '@angular/core';

import { StyleGuideService } from './style-guide.service';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'sg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this Style Guide';
  response: HighlightResult;
  testCode = `
  <div>
     <span>
        barfoo
      </span>
  </div>
  `;

  constructor (private styleGuide: StyleGuideService) {}

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }
}
