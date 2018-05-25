import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship';
import { ShipService } from '../ship.service';

@Component({
  selector: 'app-ship-list',
  template: `
  <h1>Starships</h1>
  <div class="list-group">
    <p *ngFor="let starship of ship">
      <a [routerLink]="['/starships', starship.id]"  class="list-group-item list-group-item-action light">
      {{starship.name}}
    </a>
  </p>
</div>
  `,
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  ship: Starship[] = [];

  constructor(private shipService: ShipService) { }

  ngOnInit() {
    this.shipService
        .getAll()
        .subscribe(p => this.ship = p);
  }
}
