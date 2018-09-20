import { Component, Attribute } from '@angular/core';

@Component({
  selector: 'sg-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {
  closed = false;

  constructor( @Attribute('collapsed') collapsed: string) {
    if (collapsed === '' || collapsed === 'true') {
      console.log('Collapsed attribute indicated it should be collapsed by default.');
      this.closed = true;
    }
  }

  toggle() {
    this.closed = !this.closed;
  }
}
