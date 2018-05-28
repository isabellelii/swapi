import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmService } from './film.service';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { ShipService } from './ship.service';
import { AllplanetsService } from './allplanets.service';
import { AllplanetsListComponent } from './allplanets-list/allplanets-list.component';
import { AllplanetsDetailsComponent } from './allplanets-details/allplanets-details.component';
import { SpeciesService } from './species.service';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { VehiclesService} from './vehicles.service';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { AlertService } from './alert.service';
import { AuthenticationService} from './authentication.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { JwtInterceptor } from './jwt.interceptor';

import { fakeBackendProvider } from './fake-backend';

import { AppRoutingModule } from "./app-routing.module";
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
