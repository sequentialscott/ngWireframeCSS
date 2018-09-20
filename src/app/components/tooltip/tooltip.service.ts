import { Injectable } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  tips: any = {};

  constructor() { }

  register(tooltipId: string, tooltip: TooltipComponent) {
    this.tips[tooltipId] = tooltip;
  }
}
