import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { AllplanetsService } from '../allplanets.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-allplanets-details',
  template: `
  <section *ngIf="planet">
  <section>
    <h2>You selected: {{planet.name}}</h2>
    <h3>Description</h3>
    <p>  Name: {{planet.name}} </p>
    <p>  Rotation period: {{planet.rotation_period}} </p>
    <p>  Diameter: {{planet.diameter}} diameter</p>
    <p>  Terrain: {{planet.terrain}} </p>
    <p>  Climate: {{planet.climate}} </p>
    <p>  Population: {{planet.population}} people</p>
  </section>
  <button (click)="gotoAllplanetsList()">Back to planets list</button>
</section>
  `
})

export class AllplanetsDetailsComponent implements OnInit, OnDestroy {
  planet: Planet;
  sub: any;

  constructor(private allplanetsService: AllplanetsService,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
        let id = Number.parseInt(params['id']);
        console.log('getting planet with id: ', id);
        this.allplanetsService
          .get(id)
          .subscribe(p => this.planet = p);
      });
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  gotoAllplanetsList(){
      let link = ['/planets'];
      this.router.navigate(link);
  }
}