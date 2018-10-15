import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HighlightModule } from 'ngx-highlightjs';
import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';

import { TooltipTopicComponent } from './topics/tooltip-topic/tooltip-topic.component';
import { TextStylesTopicComponent } from './topics/text-styles-topic/text-styles-topic.component';
import { PanelsTopicComponent } from './topics/panels-topic/panels-topic.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbsTopicComponent } from './topics/breadcrumbs-topic/breadcrumbs-topic.component';
import { IconsTopicComponent } from './topics/icons-topic/icons-topic.component';
import { LinkListComponent } from './components/link-list/link-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    CollapseComponent,
    TooltipDirective,
    TooltipComponent,
    TooltipTopicComponent,
    TextStylesTopicComponent,
    PanelsTopicComponent,
    BreadcrumbComponent,
    BreadcrumbsTopicComponent,
    IconsTopicComponent,
    LinkListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightModule.forRoot({ theme: 'gruvbox-light' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
