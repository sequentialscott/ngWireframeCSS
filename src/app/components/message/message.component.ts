import { Component, OnInit, Input } from '@angular/core';

export interface MessageConfig {
  messageType?: string;
  dismissable?: boolean;
  compact?: boolean;
  visible?: boolean;
  callback?: Function;
}

@Component({
  selector: 'sg-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: MessageConfig;
  iconClass ;

  constructor() { }

  ngOnInit() {
    this.message.messageType = this.message.messageType || 'info';
    this.message.dismissable = this.message.dismissable === true ? true : false;
    this.message.compact = this.message.compact === true ? true : false;
    this.message.visible = this.message.visible === true ? true : false;
    this.message.callback = this.message.callback || null;

    this.iconClass = {
      'ok': this.message.messageType === 'success',
      'error': this.message.messageType === 'error',
      'warning': this.message.messageType === 'warning',
      'ellipsis': this.message.messageType === 'no-data',
      'info': this.message.messageType === 'info',
      'compact': this.message.compact
    };
  }

  dismiss() {
    if (this.message.callback) {
      this.message.callback();
    }
    this.message.visible = false;
  }

  show() {
    this.message.visible = true;
  }
}
