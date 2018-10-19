import { Component, OnInit } from '@angular/core';

import { StyleGuideService } from './style-guide.service';
import { HighlightResult } from 'ngx-highlightjs';
import { Link } from './components/link-list/link-list.component';

@Component({
  selector: 'sg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'this Style Guide';
  response: HighlightResult;
  tocList: Link[] = [];

  constructor (private styleGuide: StyleGuideService) {
  }

  ngOnInit() {
    const links = Object.keys(this.styleGuide.topics);
    links.forEach(link => {
      const listing = this.styleGuide.topics[link];
      const listingObj = {
        text: listing.title,
        url: '#' + listing.id
      };
      this.tocList.push(listingObj);
    });
  }

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
