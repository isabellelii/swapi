import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-list',
  template: `
  <h1>Movies</h1>
  <div class="list-group">
    <p *ngFor="let movie of film">
      <a [routerLink]="['/movies', movie.id]" class="list-group-item list-group-item-action light">
      {{movie.title}}
    </a>
  </p>
</div>
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
