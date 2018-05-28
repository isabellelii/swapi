import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { AllplanetsListComponent } from './allplanets-list/allplanets-list.component';
import { AllplanetsDetailsComponent } from './allplanets-details/allplanets-details.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { PeopleService } from './_services/people.service';
import { FilmService } from './_services/film.service';
import { ShipService } from './_services/ship.service';
import { AllplanetsService } from './_services/allplanets.service';
import { SpeciesService } from './_services/species.service';
import { VehiclesService} from './_services/vehicles.service';
import { AlertService } from './_services/alert.service';
import { AuthenticationService} from './_services/authentication.service';
import { UserService } from './_services/user.service';

import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    FilmListComponent,
    FilmDetailsComponent,
    ShipListComponent,
    ShipDetailsComponent,
    AllplanetsListComponent,
    AllplanetsDetailsComponent,
    SpeciesListComponent,
    SpeciesDetailsComponent,
    VehiclesListComponent,
    VehiclesDetailsComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PeopleService,
    FilmService,
    ShipService,
    AllplanetsService,
    SpeciesService,
    VehiclesService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
      },

      fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
