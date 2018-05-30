import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { VehiclesService } from '../_services/vehicles.service';
import { Transport } from '../_models/transport';

@Component({
  selector: 'app-vehicles-details',
  template: `
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <section *ngIf="transport">
    <section>
      <h2 class="display-4">You selected: {{transport.name}}</h2>
      <h3>Description</h3>
      <p> Name: {{transport.name}} </p>
      <p> Model: {{transport.model}} </p>
      <p> Length: {{transport.length}} meter </p>
      <p> Speed: {{transport.max_atmosphering_speed}} kilometer per hour </p>
      <p> Crew: {{transport.crew}} people </p>
      <p> Passengers: {{transport.passengers}} people </p>
      <p> Vehicle class: {{transport.vehicle_class}} meter </p>
    </section>
      <button class="btn btn-outline-warning btn-lg btn-block" (click)="gotoVehicleList()">Back to vehicle list</button>
  </section>
  </div>
</div>
  `,
  styles: []
})
export class VehiclesDetailsComponent implements OnInit {
  transport: Transport;
  sub: any;

  constructor(private vehicleService: VehiclesService,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
        let id = Number.parseInt(params['id']);
        console.log('getting vehicle with id: ', id);
        this.vehicleService
          .get(id)
          .subscribe(p => this.transport = p);
      });
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  gotoVehicleList(){
      let link = ['/vehicles'];
      this.router.navigate(link);
  }
}
