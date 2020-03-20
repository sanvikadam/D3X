import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';


@Component({
  selector: 'app-recipient-details',
  templateUrl: './recipient-details.component.html',
  styleUrls: ['./recipient-details.component.css']
})
export class RecipientDetailsComponent implements OnInit {

  constructor(public dataService: DataserviceService) { }

  ngOnInit() {
    //console.log('hello :' +JSON.stringify(this.dataService.postData));

  }

}
