import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { SpeciesService } from '../species.service';

@Component({
  selector: 'app-species-list',
  template: `
  <h1>Species</h1>
  <div class="list-group">
    <p *ngFor="let animal of species">
      <a [routerLink]="['/species', animal.id]" class="list-group-item list-group-item-action light">
        {{animal.name}}
      </a>
    </p>
  </div>
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
