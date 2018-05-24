import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { AllplanetsService } from '../allplanets.service';

@Component({
  selector: 'app-allplanets-list',
  template: `
  <h1>Planets</h1>
  <ul>
    <li *ngFor="let planet of allplanets">
      <a [routerLink]="['/planets', planet.id]">
        {{planet.name}}
      </a>
    </li>
  </ul>
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
