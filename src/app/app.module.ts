import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import appRoutes from './routerConfig';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LocataireComponent } from './components/locataire/locataire.component';
import { CandidatComponent } from './components/candidat/candidat.component';
import {ReactiveFormsModule} from "@angular/forms";

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LocataireComponent,
    CandidatComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {

}

