import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FilmService } from '../_services/film.service';
import { FilmsearchService } from '../_services/filmsearch.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-film-list',
  template: `
  <h1>Movies</h1>

  <div class="input-group input-group-lg">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-lg">Search for movies</span>
    </div>
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
    (keyup)="searchTerm$.next($event.target.value)" >
    <ul *ngIf="results">
      <li *ngFor="let result of results | slice:0:9">
        <h2>  {{ result.title  }}</h2>
        <p> Title: {{result.title}} </p>
        <p> Episode: {{result.episode_id}} </p>
        <p> Director: {{result.director}}. </p>
        <p>  Opening crawl: {{result.opening_crawl}}.</p>
      </li>
    </ul>
  </div>

  <div class="list-group">
    <p *ngFor="let movie of film">
      <a [routerLink]="['/movies', movie.id]" class="list-group-item list-group-item-action light">
      {{movie.title}}
      </a>
    </p>
  </div>
  `,
  styleUrls: ['./film-list.component.css'],
  providers: [FilmsearchService]
})
export class FilmListComponent implements OnInit {
  film: Movie[] = [];
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private filmService: FilmService,
    private filmsearchService: FilmsearchService) {
    this.filmsearchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  ngOnInit() {
    this.filmService
      .getAll()
      .subscribe(p => this.film = p);
  }
}
