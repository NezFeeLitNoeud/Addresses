import { Component, OnInit } from '@angular/core';
import { GetServiceService} from '../../services/get-service.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  addresses: Array<any>
  constructor(private getService: GetServiceService) { }

  ngOnInit() {

  }

}
