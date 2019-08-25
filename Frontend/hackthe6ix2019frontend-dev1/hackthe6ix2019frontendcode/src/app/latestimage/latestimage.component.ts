import { Component, OnInit } from '@angular/core';
import { Urls } from '../urls.model';
import { UrlsService} from "../urls.service";

@Component({
  selector: 'component-latestimage',
  templateUrl: './latestimage.component.html',
  styleUrls: ['./latestimage.component.scss']
})
export class LatestimageComponent implements OnInit {

  urls = [];
  picurl = '';

  constructor(private urlService: UrlsService) { }

  ngOnInit() {
    this.fetchURL()
    this.urls = [];
    //this.urls.push('https://archivedaddy.s3.us-east-2.amazonaws.com/zoo_test.jpg');
  }

  fetchURL() {
    this.urlService
    .getURL()
      .subscribe((data: []) => {
        this.picurl = 'https://archivedaddy.s3.us-east-2.amazonaws.com/' + data;
        //document.getElementById('latestImage').setAttribute( 'src', this.picurl);
        console.log('Data requested');
        console.log(this.urls);
      });
  }

}
