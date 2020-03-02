import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  data: Array<any>;

  constructor(private httpClient: HttpClient) { }

  getAppareilsFromServer() {
    // return this.httpClient
    //   .get<any[]>('http://localhost:8082/addresses/all')
    //   .subscribe(
    //     (response) => {
    //       this.data = response;
    //       console.log(this.data)
    //     },
    //     (error) => {
    //       console.log('Erreur ! : ' + error);
    //     }
    //   );

    return this.httpClient.get<any[]>('http://localhost:8082/addresses/all');
}
}
