import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[sgTooltipTrigger]',
})
export class TooltipDirective implements OnInit {
  @Input() trigger = 'mouseenter';
  @Input() sgTooltipTrigger: string;
  private el: HTMLElement;
  private dismissOn: string;
  private dispose: Function;

  constructor(private renderer: Renderer2, private ref: ElementRef, private tts: TooltipService) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    if (this.trigger === 'click') {
      this.dismissOn = 'click';
    } else {
      this.dismissOn = 'mouseleave';
    }

    this.dispose = this.renderer.listen(this.el, this.trigger, this.showTip.bind(this));
  }

  showTip(event) {
    event.stopPropagation();
    const YwithScroll = event.clientY + document.documentElement.scrollTop;
    if (this.tts.tips[this.sgTooltipTrigger]) {
      this.tts.tips[this.sgTooltipTrigger].show(event.clientX, YwithScroll);
    } else {
      console.log('There is not a matching tooltip to the id: ' + this.sgTooltipTrigger);
    }

    this.dispose(); // Destroy the listener

    // Binds the mouseleave event if it's the hover condition.  If not, binds the click event.
    if (this.dismissOn === 'click') {
      this.dispose = this.renderer.listen('document', this.dismissOn, this.hideTip.bind(this));
    } else if (this.dismissOn === 'mouseleave') {
      this.dispose = this.renderer.listen(this.el, this.dismissOn, this.hideTip.bind(this));
    }
  }
  hideTip(event) {
    if (this.tts.tips[this.sgTooltipTrigger]) {
      this.tts.tips[this.sgTooltipTrigger].hide();
    } else {
      console.log('There is not a matching tooltip to the id: ' + this.sgTooltipTrigger);
    }

    // Set up listener on the tooltip again.
    this.dispose();
    this.dispose = this.renderer.listen(this.el, this.trigger, this.showTip.bind(this));
  }
}
