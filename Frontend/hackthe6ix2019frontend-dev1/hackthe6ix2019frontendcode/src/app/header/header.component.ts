import { Component, OnInit } from '@angular/core';

const messages = {
  standard: 'Statistics and Tracking',
  description: 'Review and monitor tracking statistics.'
};

@Component({
  selector: 'stats-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  message: object = messages;

  constructor() { }

  ngOnInit() {
  }

}
