import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'sg-breadcrumbs-topic',
  templateUrl: './breadcrumbs-topic.component.html',
  styleUrls: ['./breadcrumbs-topic.component.css']
})
export class BreadcrumbsTopicComponent implements OnInit {
  @Input() topicListing: any;
  highlightedCode: HighlightResult;
  linkset = [
    { label: 'Home', link: '#' },
    { label: 'First Level', link: '#' },
    { label: 'Second Level' },
    { label: 'Current Page' }
  ];

  code = `
<sg-breadcrumb links="linkset"></sg-breadcrumb>

<script>
  // In the component using the breadcrumbs.
  linkset = [
    { label: 'Home', link: '#' },
    { label: 'First Level', link: '#' },
    { label: 'Second Level' },
    { label: 'Current Page' }
  ];
</script>
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
