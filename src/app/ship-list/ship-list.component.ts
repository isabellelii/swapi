import { Component, OnInit } from '@angular/core';
import { Starship } from '../_models/starship';
import { ShipService } from '../_services/ship.service';
import { StarshipsearchService } from '../_services/starshipsearch.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-ship-list',
  template: `
  <h1>Starships</h1>
  <div class="input-group input-group-lg">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-lg">Search for starships</span>
    </div>
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
    (keyup)="searchTerm$.next($event.target.value)" >
    <ul *ngIf="results">
      <li *ngFor="let result of results | slice:0:9">
        <h2>  {{ result.name  }}</h2>
        <p>
          {{result.name}} is a starship with the model of {{result.model}}. This starship has a max speed of {{result.max_atmosphering_speed}} kilometers per hour.
          On the starship, there is a crew of {{result.crew}} people and {{result.passengers}} passengers.
        </p>
      </li>
    </ul>
</div>

  <div class="list-group">
    <p *ngFor="let starship of ship">
      <a [routerLink]="['/starships', starship.id]"  class="list-group-item list-group-item-action light">
      {{starship.name}}
    </a>
  </p>
</div>
  `,
  styleUrls: ['./ship-list.component.css'],
  providers: [StarshipsearchService]
})
export class ShipListComponent implements OnInit {
  ship: Starship[] = [];
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private shipService: ShipService,
    private starshipsearchService: StarshipsearchService) {
    this.starshipsearchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  ngOnInit() {
    this.shipService
      .getAll()
      .subscribe(p => this.ship = p);
  }
}
