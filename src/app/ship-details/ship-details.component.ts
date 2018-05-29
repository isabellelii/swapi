import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { ShipService } from "../_services/ship.service";
import { Starship } from "../starship";

@Component({
  selector: 'app-ship-details',
  template: `
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <section *ngIf="starship">
    <section>
      <h2 class="display-4">You selected: {{starship.name}}</h2>
      <h3>Description</h3>
      <p>  Name: {{starship.name}} </p>
      <p>  Model: {{starship.model}} </p>
      <p>  Crew: {{starship.crew}} people</p>
      <p>  Passengers: {{starship.passengers}} people </p>
      <p>  Maximum speed: {{starship.max_atmosphering_speed}} kilometer per hour</p>
      <p>  Starship class: {{starship.starship_class}} </p>
    </section>
    <button class="btn btn-outline-warning btn-lg btn-block" [routerLink]="['/starships']">Back to starships list</button>
  </section>
  </div>
</div>
  `,
})
export class ShipDetailsComponent implements OnInit {
  starship: Starship;
  sub: any;

  constructor(private shipService: ShipService,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
        let id = Number.parseInt(params['id']);
        console.log('getting starship with id: ', id);
        this.shipService
          .get(id)
          .subscribe(p => this.starship = p);
      });
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  gotoShipList(){
      let link = ['/starships'];
      this.router.navigate(link);
  }
}
