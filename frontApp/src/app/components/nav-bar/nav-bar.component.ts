import { Component, OnInit } from '@angular/core';
import { GetServiceService} from '../../services/get-service.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  answer: Array<any>
  constructor(private getService: GetServiceService) { }

  ngOnInit() {
    this.showAll();
  }

  showAll(){
    this.getService.getAppareilsFromServer().subscribe(data => {
      this.answer = data;
      console.log(this.answer)
    })
  }

}
