import {Injectable} from '@angular/core';
import {Locataire} from "../shared/models/locataire";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LOCATAIRES_URL} from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class LocataireService {

  constructor(private http: HttpClient) {
  }

  all(): Observable<Locataire[]> {
    return this.http.get<Locataire[]>(LOCATAIRES_URL);
  }

  get(id: String): Observable<Locataire> {
    console.log(LOCATAIRES_URL + "/" + id)
    return this.http.get<Locataire>(LOCATAIRES_URL + "/" + id);
  }

  update(id: String, locataire: Locataire): Observable<Locataire> {
    return this.http.put<Locataire>(LOCATAIRES_URL, locataire);
  }

  create(locataire: Locataire): Observable<Locataire> {
    return this.http.post<Locataire>(LOCATAIRES_URL , locataire);
  }


  delete(id: String): Observable<String> {
    return this.http.delete<String>(LOCATAIRES_URL  +"/"+ id);
  }
}
