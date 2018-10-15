import { Component, OnInit, Input } from '@angular/core';

export interface Link {
  text: string;
  url: string;
}

@Component({
  selector: 'sg-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  @Input() links: Link[];
  @Input() columns = 1;

  constructor() { }

  ngOnInit() {
    if (this.columns > 4) {
      this.columns = 4;
    }
  }

}
