import { Component, OnInit, OnChanges } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  userName: string;
  constructor(
    public dataService: DataserviceService
  ) { }

  ngOnInit() {
    this.userName = "Valerie Luna";
  }

  ngOnChanges() {
     this.userName = this.dataService.userName;
  }

}
