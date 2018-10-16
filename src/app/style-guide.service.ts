import { Injectable } from '@angular/core';

export interface Listing {
  id: string;
  title: string;
  type: string[];  // Should be from: layout, container, convention, interaction, widget
  options: object;
}


@Injectable({
  providedIn: 'root'
})
export class StyleGuideService {
  topics = {
    'breadcrumbs': {
      id: 'breadcrumb',
      title: 'Breadcrumbs',
      type: ['widget'],
      options: {}
    },
    'icons': {
      id: 'icons',
      title: 'Icons',
      type: ['widget', 'convention'],
      options: {
        compact: false
      }
    },
    'linkLists': {
      id: 'link-list',
      title: 'Link Lists',
      type: ['convention'],
      options: {
        columns: 2,
        columnOptions: [1, 2, 3, 4],
        compact: false
      }
    },
    'panels': {
      id: 'panels',
      title: 'Panels',
      type: ['layout'],
      options: {
        showHeader: true,
        showFooter: false,
        drawn: true,
        headingColor: 'whitesmoke',
        bodyColor: 'white',
        footerColor: 'white'
      }
    },
    'text-styles': {
      id: 'text-styles',
      title: 'Text Styles',
      type: ['convention'],
      options: {
        currentStyle: 'Instructions',
        styleOptions: ['Instructions', 'Note', 'Field Help', 'Current Status' ],
        compact: false
      }
    },
    'tooltip': {
      id: 'tooltip',
      title: 'Tooltips',
      type: ['widget'],
      options: {
        trigger: 'Hover',
        triggerOptions: ['Hover', 'Click']
      }
    },
    'user-messages': {
      id: 'user-messages',
      title: 'User Messages',
      type: ['convention', 'widget'],
      options: {
        messageType: 'Success',
        messageTypeOptions: [ 'Success', 'Error', 'Warning', 'Info', 'No Data', 'Loading' ],
        dismissable: true,
        callback: false,
        compact: false,
        visible: true
      }
    }
  };

  colors: string[] = [
    'aliceblue',
    'antiquewhite',
    'azure',
    'beige',
    'bisque',
    'blanchedalmond',
    'burlywood',
    'cornsilk',
    'floralwhite',
    'gainsboro',
    'ghostwhite',
    'honeydew',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lemonchiffon',
    'lightcyan',
    'lightgray',
    'lightgrey',
    'lightyellow',
    'linen',
    'mintcream',
    'mistyrose',
    'mocassin',
    'oldlace',
    'palegoldenrod',
    'papayawhip',
    'peachpuff',
    'powderblue',
    'rebeccapurple',
    'seashell',
    'silver',
    'thistle',
    'tomato',
    'wheat',
    'white',
    'whitesmoke'];

  icons: string[] = [
    'add',
    'arrowdown',
    'arrowright',
    'arrow',
    'attachment',
    'closed',
    'document',
    'doubledown',
    'doubleright',
    'download',
    'edit',
    'ellipsis',
     'error',
     'info',
     'minus',
     'ok',
     'open',
     'options',
     'plus',
     'reload',
     'upload',
     'warning'];
  constructor() { }
}
