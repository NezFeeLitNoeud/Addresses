import { Component, OnInit } from '@angular/core';
import { GetServiceService} from '../../services/get-service.service'

@Component({
  selector: 'app-show-address',
  templateUrl: './show-address.component.html',
  styleUrls: ['./show-address.component.css']
})
export class ShowAddressComponent implements OnInit {

  constructor(private getService: GetServiceService) { }

  ngOnInit() {
    this.showAll();
  }

  // Amélioration : Rajouter un nom et prenom + l'afficher sur la carte au lieux de tout le reste.
  // pouvoir et cliquer sur la carte et afficher les adresses
  showAll(){
    this.getService.getAppareilsFromServer()
  }

  async delete(id: number) {
    await this.getService.delete(id);
    this.getService.results.splice(this.getService.results.findIndex(address => address.id === id), 1);
  }
}
