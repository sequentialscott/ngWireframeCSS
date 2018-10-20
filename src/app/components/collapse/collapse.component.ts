import { Component, Attribute, OnInit } from '@angular/core';

@Component({
  selector: 'sg-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {
  closed = false;
  compactArrow = false;
  attrCollapsed: string;
  attrCompact: string;

  constructor( @Attribute('collapsed') collapsed: string, @Attribute('compact') compact: string) {
    this.attrCollapsed = collapsed;
    this.attrCompact = compact;
  }

  ngOnInit() {
    if (this.attrCollapsed === '' || this.attrCollapsed === 'true') {
      this.closed = true;
    }
    if (this.attrCompact === '' || this.attrCompact === 'true') {
      this.compactArrow = true;
    }
  }

  toggle(): void {
  this.closed = !this.closed;
}
}
