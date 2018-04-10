import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parlament } from '../../pages/parlaments/parlament-list-item/parlament.model';

/*
  Generated class for the ParlamentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParlamentProvider {

  constructor(public http: HttpClient) { }

  getDeputies(page): Promise<Parlament[]> {
    return new Promise((resolve, reject) => {
      this.http.get("https://dadosabertos.camara.leg.br/api/v2/deputados?ordenarPor=nome&pagina=" + page).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getSenators(): Promise<any> {
    let headers = new HttpHeaders();
    headers.set("Accept", "application/json");
    return new Promise((resolve, reject) => {
      this.http.get("http://legis.senado.leg.br/dadosabertos/senador/lista/atual", { headers: headers }).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
