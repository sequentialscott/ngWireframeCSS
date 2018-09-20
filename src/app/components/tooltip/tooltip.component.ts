import { Component, OnInit, Input } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Component({
  selector: 'sg-tooltip',
  template: `
  <div id="{{ tooltipId }}" class="tooltip" [hidden]="!showTooltip" [style.top]="positionY+'px'" [style.left]="positionX+'px'">
      <ng-content></ng-content>
      {{ text }}
  </div>`,
  // templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  @Input() position = 'right';
  @Input() text: string;
  @Input() tooltipId: string;
  showTooltip = false;
  positionX: number;
  positionY: number;


  constructor(private tts: TooltipService) { }

  ngOnInit() {
    this.tts.register(this.tooltipId, this);
  }

  show(posX, posY) {
    this.positionX = posX - 14;
    this.positionY = posY;
    this.showTooltip = true;
  }
  hide() {
    this.positionX = 0;
    this.positionY = 0;
    this.showTooltip = false;
  }

}
