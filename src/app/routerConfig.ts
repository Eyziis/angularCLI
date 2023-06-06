import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocataireComponent } from './components/locataire/locataire.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },  { path: 'home',
    component: HomeComponent
  },/*
  {
    path: 'about',
    component: AboutComponent
  },*/
  { path: 'locataire',
    component: LocataireComponent
  }
];
export default appRoutes;
