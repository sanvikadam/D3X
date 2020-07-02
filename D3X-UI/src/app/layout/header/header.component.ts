import { Component, AfterContentChecked } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterContentChecked {
  userName: any;
  getUser: any = {};
  constructor(
    public dataService: DataserviceService
  ) { }

  ngOnInit() {
    this.getData();
  }

  ngAfterContentChecked(){
    this.getData();
  }


  getData(){
    let updateData = JSON.parse(localStorage.getItem('user'));
    this.userName = updateData[0].firstName+" "+updateData[0].lastName;
  }

}
