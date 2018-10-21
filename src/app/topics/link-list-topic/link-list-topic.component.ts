import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

import { Link } from '../../components/link-list/link-list.component';

@Component({
  selector: 'sg-link-list-topic',
  templateUrl: './link-list-topic.component.html',
  styleUrls: ['./link-list-topic.component.css']
})
export class LinkListTopicComponent implements OnInit {
  @Input() topicListing: any;
  highlightedCode: HighlightResult;
  code: string;
  linkList: Link[] = [
    { text: 'A List Apart', url: 'https://alistapart.com/' },
    { text: 'NN/g Articles', url: 'https://www.nngroup.com/articles/'},
    { text: 'Boxes and Arrows', url: 'http://boxesandarrows.com/' },
    { text: 'Smashing Magazine', url: 'https://www.smashingmagazine.com/articles/'},
    { text: 'UX Magazine', url: 'http://uxmag.com/' },
    { text: 'UXPA', url: 'https://uxpa.org/' },
    { text: 'UX Booth', url: 'http://www.uxbooth.com/'},
    { text: 'Intechnic Blog', url: 'https://www.intechnic.com/blog/topic/ux' }
  ];

  constructor() { }

  ngOnInit() {
    this.updateCode();
  }

  updateCode() {
    this.code = `
<ul class="link-list columns-${ this.topicListing.options.columns }">
    <li><a href="https://alistapart.com">A List Apart</a></li>
    <li><a href="https://www.nngroup.com/articles/">NN/g Articles</a></li>
    <li><a href="http://boxesandarrows.com/">Boxes and Arrows</a></li>
    <li><a href="https://www.smashingmagazine.com/articles/">Smashing Magazine</a></li>
    <li><a href="http://uxmag.com/">UX Magazine</a></li>
    <li><a href="https://uxpa.org/'>UX Booth</a></li>
    <li><a href="http://www.uxbooth.com/">UX Booth</a></li>
    <li><a href="https://www.intechnic.com/blog/topic/ux">Intechnic Blog</a></li>
</ul>

or

<sg-link-list [links]="linkList" [columns]="${ this.topicListing.options.columns }"></sg-link-list>
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
