import {Component, OnInit} from '@angular/core';
import {Locataire} from "../../shared/models/locataire";
import {LocataireService} from "../../services/locataire.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { FormControl,FormGroup } from '@angular/forms';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent implements OnInit {
  protected readonly formatDate = formatDate;
  locataireForm = new FormGroup({
    id: new FormControl<string>('',{nonNullable:true}),
    nom: new FormControl<string>('',{nonNullable:true}),
    age: new FormControl<number>(null,{nonNullable:true}),
    email: new FormControl<string>('',{nonNullable:true}),
    date_e: new FormControl<string>('',{nonNullable:false})
  })

  locataires: Locataire[] = [];
  loc: Locataire = new Locataire();


  constructor(private locataireService: LocataireService, activatedRoute: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.all();
  }

  all(){
    this.locataireService.all().subscribe((serverLocataire2)=>
    {
      this.locataires = serverLocataire2;
      this.loc = this.locataires[0];
      this.locataireForm.setValue({
        id: this.loc.id,
        nom: this.loc.nom,
        age: this.loc.age,
        email: this.loc.email,
        date_e: formatDate(this.loc.date_e,'yyyy-MM-dd','fr')
      })
    });
  }

  get(id: String) {
    this.locataireService.get(id).subscribe((serverLocataire2)=>
    {
      this.loc = serverLocataire2[0];
      this.locataireForm.setValue({
        id: this.loc.id,
        nom: this.loc.nom,
        age: this.loc.age,
        email: this.loc.email,
        date_e: formatDate(this.loc.date_e,'yyyy-MM-dd','fr')
      })
    });
  }

  delete(id: String){
    this.locataireService.delete(id).subscribe((serverLocataire)=>
    {
      var index = this.locataires.findIndex(x => x.id===id) ;
      this.locataires.splice(index,1)

      if(this.locataires.length>0){
        this.loc = this.locataires[0];
        this.locataireForm.setValue({
          id: this.loc.id,
          nom: this.loc.nom,
          age: this.loc.age,
          email: this.loc.email,
          date_e: formatDate(this.loc.date_e,'yyyy-MM-dd','fr')
        })
      }
    });
  }

  update(id: String){
    this.loc = this.locataireForm.getRawValue();

    this.locataireService.update(id,this.loc).subscribe((serverLocataire)=>
    {
      var index = this.locataires.findIndex(x => x.id===id) ;
      this.locataires[index] = this.loc;
      alert('Locataire modifié');
    });

  }

  create(){
    this.loc = this.locataireForm.getRawValue();

    this.locataireService.create(this.loc).subscribe((serverLocataire)=>
    {
      console.log();
      this.loc.id = serverLocataire.id;
      this.locataires.push(this.loc);
      alert('Locataire crée');
    });
  }

  videForm() {
    this.locataireForm.setValue({
      id: '',
      nom: '',
      age: null,
      email: '',
      date_e: ''
    })
  }
}
