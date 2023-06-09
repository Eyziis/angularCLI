import {Injectable} from '@angular/core';
import {Locataire} from "../shared/models/locataire";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {LOCATAIRES_URL} from "../shared/constants/urls";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class LocataireService {

  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get(LOCATAIRES_URL,{observe: 'response'});
  }

  get(idLoc: string): Observable<any> {
    //return this.http.get<Locataire>(LOCATAIRES_URL + "/" + id);
    const params = new HttpParams().set('id', idLoc);

    return this.http.get(LOCATAIRES_URL+"/search", {
      params,
      observe: 'response'
    });
  }

  update(id: String, locataire: Locataire): Observable<any> {
    return this.http.put<Locataire>(LOCATAIRES_URL, locataire);
  }

  create(locataire: Locataire): Observable<any> {
    return this.http.post<Locataire>(LOCATAIRES_URL, locataire);
  }


  delete(id: String): Observable<any> {
    return this.http.delete<String>(LOCATAIRES_URL + "/" + id);
  }

  search(nom: string, typeRecherche: string): Observable<any> {

    const params = new HttpParams()
      .set('nom', nom)
      .set('type', typeRecherche);

    return this.http.get(LOCATAIRES_URL+"/search", {
      params,
      observe: 'response'
    });

  }
}
