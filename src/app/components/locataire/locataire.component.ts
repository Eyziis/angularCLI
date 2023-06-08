import {Component, OnInit} from '@angular/core';
import {Locataire} from "../../shared/models/locataire";
import {LocataireService} from "../../services/locataire.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent implements OnInit {

  locataires: Locataire[] = [];

  constructor(private locataireService: LocataireService, activatedRoute: ActivatedRoute) {
    let locatairesObservable: Observable<Locataire[]>;
    activatedRoute.params.subscribe((params) => {
      if (!params['searchTerm'])
        locatairesObservable = locataireService.getAll();
      else
        locatairesObservable = locataireService.getById(params['searchTerm'])

      locatairesObservable.subscribe((serverLocataires) => {
        this.locataires = serverLocataires;
      })
    })

  }

  ngOnInit(): void {

  }

}
