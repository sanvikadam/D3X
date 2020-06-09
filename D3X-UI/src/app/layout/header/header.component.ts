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
    this.userName = this.dataService.userDetails[0].name+" "+this.dataService.userDetails[1].name;
  }

  ngOnChanges() {
     this.userName = this.dataService.userDetails[0].name+" "+this.dataService.userDetails[1].name
    
  }

}
