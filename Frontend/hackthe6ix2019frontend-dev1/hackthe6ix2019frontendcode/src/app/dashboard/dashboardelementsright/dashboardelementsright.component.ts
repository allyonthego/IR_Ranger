import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'component-dashboardelementsright',
  templateUrl: './dashboardelementsright.component.html',
  styleUrls: ['./dashboardelementsright.component.scss']
})
export class DashboardelementsrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string;
  @Input() desc: string;

}
