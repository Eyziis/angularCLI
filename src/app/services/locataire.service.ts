import {Injectable} from '@angular/core';
import {Locataire} from "../shared/models/locataire";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LOCATAIRES_URL} from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class LocataireService {

  constructor(private http:HttpClient) {
  }

  getAll(): Observable<Locataire[]> {
    return this.http.get<Locataire[]>(LOCATAIRES_URL);
  }
  getById(id:BigInteger): Observable<Locataire[]> {
    return this.http.get<Locataire[]>(LOCATAIRES_URL);
  }
}
