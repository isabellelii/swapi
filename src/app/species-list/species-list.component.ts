import { Component, OnInit } from '@angular/core';
import { Animal } from '../_models/animal';
import { SpeciesService } from '../_services/species.service';
import { SpeciessearchService } from '../_services/speciessearch.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-species-list',
  template: `
  <h1>Species</h1>
  <div class="input-group input-group-lg">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-lg">Search for speices</span>
    </div>
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
    (keyup)="searchTerm$.next($event.target.value)" >
    <ul *ngIf="results">
      <li *ngFor="let result of results | slice:0:9">
        <h2>  {{ result.name  }}</h2>
        <p>
          {{result.name}} is a species of the class {{result.classification}} that speaks {{result.language}}. They have an average height of {{result.height}} centimeters, has {{result.eye_colors}} eyes and
          {{result.hair_color}} hair. This species usually lives around {{result.average_lifespan}} years.
        </p>
      </li>
    </ul>
</div>

  <div class="list-group">
    <p *ngFor="let animal of species">
      <a [routerLink]="['/species', animal.id]" class="list-group-item list-group-item-action light">
        {{animal.name}}
      </a>
    </p>
  </div>
  `,
  styleUrls: ['./species-list.component.css'],
  providers: [SpeciessearchService]
})
export class SpeciesListComponent implements OnInit {
  species: Animal[] = [];
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private speciesService: SpeciesService,
    private speciessearchService: SpeciessearchService) {
    this.speciessearchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  ngOnInit() {
    this.speciesService
      .getAll()
      .subscribe(p => this.species = p);
  }
}
