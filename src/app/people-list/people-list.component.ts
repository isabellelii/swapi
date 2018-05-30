import { Component, OnInit } from '@angular/core';
import { Person } from '../_models/person';
import { PeopleService } from "../_services/people.service";
import { PeoplesearchService } from '../_services/peoplesearch.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-people-list',
  template: `
  <h2>Characters</h2>

  <div class="input-group input-group-lg">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-lg">Search for people</span>
    </div>
    <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
    (keyup)="searchTerm$.next($event.target.value)" >
    <ul *ngIf="results">
      <li *ngFor="let result of results | slice:0:9">
      <h2>  {{ result.name  }}</h2>
      <p>
        {{result.name}} is a {{result.gender}} that weights {{result.weight}}kg, is {{result.height}} centimeters tall
        and have {{result.eye_color}} eyes and {{result.hair_color}} hair.
      </p>
      </li>
    </ul>
  </div>

  <div class="list-group">
    <p *ngFor="let person of people">
      <a [routerLink]="['/persons', person.id]" class="list-group-item list-group-item-action light">
        {{person.name}}
      </a>
    </p>
  </div>
  `,
  styleUrls: ['./people-list.component.css'],
  providers: [PeoplesearchService]
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private peopleService: PeopleService,
    private peoplesearchService: PeoplesearchService) {
    this.peoplesearchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  ngOnInit() {
    this.peopleService
      .getAll()
      .subscribe(p => this.people = p);
  }
}
