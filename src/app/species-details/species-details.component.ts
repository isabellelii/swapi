import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { SpeciesService } from "../_services/species.service";
import { Animal } from "../animal";
@Component({
  selector: 'app-species-details',
  template: `
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <section *ngIf="animal">
    <section>
      <h2 class="display-4">You selected: {{animal.name}}</h2>
      <h3>Description</h3>
      <p>  Name: {{animal.name}} </p>
      <p>  Average height: {{animal.average_height}} </p>
      <p>  Classification: {{animal.classification}} </p>
      <p>  Hair color: {{animal.hair_color}} </p>
      <p>  Eye colors: {{animal.eye_colors}} </p>
      <p>  Average lifespan: {{animal.average_lifespan}} </p>
      <p>  Language: {{animal.language}} </p>
    </section>
    <button class="btn btn-outline-warning btn-lg btn-block" [routerLink]="['/species']">Back to species list</button>
  </section>
  </div>
</div>
  `
})
export class SpeciesDetailsComponent implements OnInit {
  animal: Animal;
  sub: any;

  constructor(private speciesService: SpeciesService,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
        let id = Number.parseInt(params['id']);
        console.log('getting species with id: ', id);
        this.speciesService
          .get(id)
          .subscribe(p => this.animal = p);
      });
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  gotoSpeciesList(){
      let link = ['/species'];
      this.router.navigate(link);
  }
  }
