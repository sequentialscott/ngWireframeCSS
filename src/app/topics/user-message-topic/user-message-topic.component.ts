import { Component, OnInit, Input } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

import { MessageConfig } from '../../components/message/message.component';

@Component({
  selector: 'sg-user-message-topic',
  templateUrl: './user-message-topic.component.html',
  styleUrls: ['./user-message-topic.component.css']
})
export class UserMessageTopicComponent implements OnInit {
  @Input() topicListing: any;
  code: string;
  colors: string[];
  highlightedCode: HighlightResult;
  messageConfig: MessageConfig;

  updateCode() {
    this.code = `
<sg-message message="messageConfig">
  This isn't Lorem Ipsum text, but it means the same thing. The longer it is,
  the less it means, until it actually starts subtracting from the sum total of
  knowledge in the universe. Oops.
</sg-message>

<script>
    this.messageConfig = {
      messageType: ${this.topicListing.options.messageConfig.messageType},
      dismissable: ${this.topicListing.options.messageConfig.dismissable},
      callback: function() { alert('A callback function just fired.  Boom!'); },
      compact: ${this.topicListing.options.messageConfig.compact},
      visible: ${this.topicListing.options.messageConfig.visible}
    };
</script>
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
