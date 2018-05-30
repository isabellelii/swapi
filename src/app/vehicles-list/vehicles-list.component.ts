import { Component, OnInit } from '@angular/core';
import { Transport } from '../_models/transport';
import { VehiclesService } from '../_services/vehicles.service';
import { VehiclesearchService } from '../_services/vehiclesearch.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-vehicles-list',
  template: `
  <h1>Vehicles</h1>

  <div class="input-group input-group-lg">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-lg">Search for vehicles</span>
    </div>
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
    (keyup)="searchTerm$.next($event.target.value)" >
    <ul *ngIf="results">
      <li *ngFor="let result of results | slice:0:9">
        <h2>  {{ result.name  }}</h2>
        <p>
          {{result.model}} is a vehicle with a length of {{result.length}} centimeters, that has a max speed of {{result.max_atmosphering_speed}} kilometers per hour.
          The vehicle has a crew of {{result.crew}} people and {{result.passengers}} passengers.
        </p>
      </li>
    </ul>
</div>

  <div class="list-group">
    <p *ngFor="let transport of vehicles">
      <a [routerLink]="['/vehicles', transport.id]" class="list-group-item list-group-item-action light">
      {{transport.name}}
    </a>
  </p>
</div>
  `,
  styleUrls: ['./vehicles-list.component.css'],
  providers: [VehiclesearchService]
})
export class VehiclesListComponent implements OnInit {
  vehicles: Transport[] = [];
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private vehiclesService: VehiclesService,
              private vehiclesearchService: VehiclesearchService) {
                this.vehiclesearchService.search(this.searchTerm$)
                .subscribe(results => {
                  this.results = results.results;
                });
              }

  ngOnInit() {
    this.vehiclesService
        .getAll()
        .subscribe(p => this.vehicles = p);
  }
}
