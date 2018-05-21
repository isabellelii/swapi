import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-list',
  template: `
  <ul>
    <li *ngFor="let movie of film">
      <a [routerLink]="['/movies', movie.id]">
      {{movie.title}}
    </a>
  </li>
</ul>
  `,
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  film: Movie[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService
        .getAll()
        .subscribe(p => this.film = p);
  }
}
