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

const routes: Routes = [
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  {
    path: 'movies',
    component: FilmListComponent,
  },
  {
    path: 'movies/:id',
    component: FilmDetailsComponent
  },
  {
    path: 'starships',
    component: ShipListComponent,
  },
  {
    path: 'starships/:id',
    component: ShipDetailsComponent
  },
  {
    path: 'planets',
    component: AllplanetsListComponent,
  },
  {
    path: 'planets/:id',
    component: AllplanetsDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
