import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'component-dashboardelements',
  templateUrl: './dashboardelements.component.html',
  styleUrls: ['./dashboardelements.component.scss']
})
export class DashboardelementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string;
  @Input() desc: string;

}
