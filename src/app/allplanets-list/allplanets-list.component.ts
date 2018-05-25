import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { AllplanetsService } from '../allplanets.service';

@Component({
  selector: 'app-allplanets-list',
  template: `
  <h1>Planets</h1>
  <div class="list-group">
    <p *ngFor="let planet of allplanets">
      <a [routerLink]="['/planets', planet.id]" class="list-group-item list-group-item-action light">
        {{planet.name}}
      </a>
    </p>
  </div>
  `,
  styleUrls: ['./allplanets-list.component.css']
})
export class AllplanetsListComponent implements OnInit {
  allplanets: Planet[] = [];

  constructor(private allplanetsService: AllplanetsService) { }

  ngOnInit() {
    this.allplanetsService
        .getAll()
        .subscribe(p => this.allplanets = p);
  }
}
