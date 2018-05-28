import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from "./people-list/people-list.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { FilmListComponent } from "./film-list/film-list.component";
import { FilmDetailsComponent } from "./film-details/film-details.component";
import { ShipDetailsComponent } from "./ship-details/ship-details.component";
import { ShipListComponent } from "./ship-list/ship-list.component";
import { AllplanetsListComponent } from "./allplanets-list/allplanets-list.component";
import { AllplanetsDetailsComponent } from "./allplanets-details/allplanets-details.component";
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent
  },
  {
    path: 'persons',
    component: PeopleListComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'persons/:id',
    component: PersonDetailsComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'movies',
    component: FilmListComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'movies/:id',
    component: FilmDetailsComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'starships',
    component: ShipListComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'starships/:id',
    component: ShipDetailsComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'planets',
    component: AllplanetsListComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'planets/:id',
    component: AllplanetsDetailsComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'species',
    component: SpeciesListComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'species/:id',
    component: SpeciesDetailsComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'vehicles',
    component: VehiclesListComponent,  canActivate: [AuthGuard]
  },
  {
    path: 'vehicles/:id',
    component: VehiclesDetailsComponent,  canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
