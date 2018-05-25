import { Component, OnInit } from '@angular/core';
import { Transport } from '../transport';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  template: `
  <h1>Vehicles</h1>
  <div class="list-group">
    <p *ngFor="let transport of vehicles">
      <a [routerLink]="['/vehicles', transport.id]" class="list-group-item list-group-item-action light">
      {{transport.name}}
    </a>
  </p>
</div>
  `,
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  vehicles: Transport[] = [];

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehiclesService
        .getAll()
        .subscribe(p => this.vehicles = p);
  }
  }
