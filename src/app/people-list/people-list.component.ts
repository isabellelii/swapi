import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from "../people.service";
import { PeoplesearchService } from '../peoplesearch.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-people-list',
  template: `
  <h1>Characters</h1>
  <input
    (keyup)="searchTerm$.next($event.target.value)" >
  <ul *ngIf="results">
    <li *ngFor="let result of results | slice:0:9">
      <h1>  {{ result.name  }}</h1>
      <p>
        {{result.name}} is a {{result.gender}} that weights {{result.weight}}kg, is {{result.height}} centimeters tall
        and have {{result.eye_color}} eyes and {{result.hair_color}} hair.
      </p>
    </li>
  </ul>

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
