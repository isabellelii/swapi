import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { AllplanetsService } from '../allplanets.service';
import { PlanetsearchService } from '../planetsearch.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-allplanets-list',
  template: `
  <h1>Planets</h1>
  <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Search</span>
  </div>
  <input
    (keyup)="searchTerm$.next($event.target.value)" >
    <ul *ngIf="results">
      <li *ngFor="let result of results | slice:0:9">
        <h1>  {{ result.name  }}</h1>
        <p>
          {{result.name}} is a planet with a diameter of {{result.diameter}} km, that has a rotation period of {{result.rotation_period}} days.
          The climate is {{result.climate}} and the terrain is {{result.terrain}}. {{result.population}} people lives here.
        </p>
      </li>
    </ul>
</div>

  <div class="list-group">
    <p *ngFor="let planet of allplanets">
      <a [routerLink]="['/planets', planet.id]" class="list-group-item list-group-item-action light">
        {{planet.name}}
      </a>
    </p>
  </div>
  `,
  styleUrls: ['./allplanets-list.component.css'],
  providers: [PlanetsearchService]
})
export class AllplanetsListComponent implements OnInit {
  allplanets: Planet[] = [];
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private allplanetsService: AllplanetsService,
              private planetsearchService: PlanetsearchService) {
                this.planetsearchService.search(this.searchTerm$)
                .subscribe(results => {
                  this.results = results.results;
              });
            }

  ngOnInit() {
    this.allplanetsService
      .getAll()
      .subscribe(p => this.allplanets = p);
  }
}
