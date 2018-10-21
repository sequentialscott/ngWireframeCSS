import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'sg-tables-topic',
  templateUrl: './tables-topic.component.html',
  styleUrls: ['./tables-topic.component.css']
})
export class TablesTopicComponent implements OnInit {
  @Input() topicListing: any;
  highlightedCode: HighlightResult;
  code: string;
  sortClasses: object;

  toggleSort() {
    this.topicListing.options.sortAscending = !this.topicListing.options.sortAscending;
    this.updateCode();
  }

  updateCode() {
    const classString = ` class="${ this.topicListing.options.sortAscending ? 'ascending' : 'descending' } cursor-pointer"`;
    this.code = `
<table${ this.topicListing.options.compact ? ' class="compact"' : '' }>
  <thead>
  <tr>
    <th${ this.topicListing.options.showSort ? classString : '' }>Doctor</th>
    <th>Ship</th>
    <th>Actor</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>McCoy</td>
    <td>USS Enterprise</td>
    <td>DeForest Kelly</td>
  </tr>
  <tr>
    <td>Franklin</td>
    <td>Babylon 5</td>
    <td>Richard Biggs</td>
  </tr>
  <tr>
    <td>THE Doctor</td>
    <td>TARDIS</td>
    <td>William Hartnell</td>
  </tr>
  </tbody>
</table>
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
