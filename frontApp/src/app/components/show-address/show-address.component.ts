import { Component, OnInit } from '@angular/core';
import { GetServiceService} from '../../services/get-service.service'

@Component({
  selector: 'app-show-address',
  templateUrl: './show-address.component.html',
  styleUrls: ['./show-address.component.css']
})
export class ShowAddressComponent implements OnInit {
  addresses: Array<any>
  constructor(private getService: GetServiceService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll(){
    this.getService.getAppareilsFromServer()
  }

  delete(id: number) {
    this.getService.delete(id);
    console.log(id)
  }
}
