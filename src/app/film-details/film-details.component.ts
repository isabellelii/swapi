import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { FilmService } from "../_services/film.service";
import { Movie } from "../movie";

@Component({
  selector: 'app-film-details',
  template: `
  <div class="card" style="width: 30rem;">
  <div class="card-body">
    <section *ngIf="movie">
    <section>
      <h2 class="card-title">You selected: {{movie.title}}</h2>
      <h3>Description</h3>
      <p> Title: {{movie.title}} </p>
      <p> Episode: {{movie.episode_id}} </p>
      <p> Director: {{movie.director}} </p>
      <p> Opening Crawl: {{movie.opening_crawl}} </p>
    </section>
    <button class="btn btn-outline-warning" (click)="gotoFilmList()">Back to peoples list</button>
    </section>
  </div>
</div>
  `
})

export class FilmDetailsComponent implements OnInit, OnDestroy {
  movie: Movie;
  sub: any;

  constructor(private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting movie with id: ', id);
      this.filmService
        .get(id)
        .subscribe(p => this.movie = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoFilmList() {
    let link = ['/movies'];
    this.router.navigate(link);
  }
}
