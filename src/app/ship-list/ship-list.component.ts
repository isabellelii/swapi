import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship';
import { ShipService } from '../ship.service';
import { StarshipsearchService } from '../starshipsearch.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-ship-list',
  template: `
  <h1>Starships</h1>
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
