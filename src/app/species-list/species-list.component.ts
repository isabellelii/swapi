import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { SpeciesService } from '../species.service';

@Component({
  selector: 'app-species-list',
  template: `
  <h1>Species</h1>
  <ul>
    <li *ngFor="let animal of species">
      <a [routerLink]="['/species', animal.id]">
        {{animal.name}}
      </a>
    </li>
  </ul>
  `,
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  species: Animal[] = [];

  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
   this.speciesService
       .getAll()
       .subscribe(p => this.species = p);
 }
}
