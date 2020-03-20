import { Pipe, PipeTransform } from '@angular/core';
// import { DeliveryShipmentDetailsComponent } from '../'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(searchTerm: string): any {
    return null;
  }

}
