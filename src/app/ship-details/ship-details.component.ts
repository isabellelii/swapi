import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { ShipService } from "../ship.service";
import { Starship } from "../starship";

@Component({
  selector: 'app-ship-details',
  template: `
  <section *ngIf="starship">
    <section>
      <h2>You selected: {{starship.name}}</h2>
      <h3>Description</h3>
      <p>  Name: {{starship.name}} </p>
      <p>  Model: {{starship.model}} </p>
      <p>  Crew: {{starship.crew}} people</p>
      <p>  Passengers: {{starship.passengers}} people </p>
      <p>  Maximum speed: {{starship.max_atmosphering_speed}} kilometer per hour</p>
      <p>  Starship class: {{starship.starship_class}} </p>
    </section>
    <button type="button"  [routerLink]="['/starships']">Back to starships list</button>
  </section>
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
