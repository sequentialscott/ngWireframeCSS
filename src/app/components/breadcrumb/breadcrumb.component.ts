import { Component, OnInit, Input } from '@angular/core';

interface BreadCrumbLink {
  label: string;
  link: string;
}

@Component({
  selector: 'sg-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() links: BreadCrumbLink[];

  constructor() { }

  ngOnInit() {
  }

}
