import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  results: Array<any>;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getAppareilsFromServer() {

    let promise = new Promise((resolve, reject) => {
      this.httpClient.get<any[]>('http://localhost:8082/addresses/all')
        .toPromise()
        .then(
          res => { // Success
            this.results = res;
            console.log(res);
            resolve();
          }
        );
    });
    return promise;
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

    //return this.httpClient.get<any[]>('http://localhost:8082/addresses/all');
}

  delete(id: number): Promise<void> {
    const url = `http://localhost:8082/addresses/${id}`;
    return this.httpClient.delete(url,this.httpOptions)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  
  handleError(){
    console.log('oops')
  }
}