import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie } from '../movie';

const FILM : Movie[] = [
  {id: 1, title: 'A New Hope', episode_id: 4, director: 'George Lucas', opening_crawl: 'text'},
  {id: 2, title: 'Return of the Jedi', episode_id: 6, director: 'George Lucas', opening_crawl: 'text'},
  {id: 3, title: 'Attack of the Clones', episode_id: 3, director: 'George Lucas', opening_crawl: 'text'}
];

@Injectable()
export class FilmService{
  private baseUrl: string = 'https://swapi.co/api';

  constructor(private http : Http){}

  getAll(): Observable<Movie[]>{
    let film$ = this.http
      .get(`${this.baseUrl}/films/`, { headers: this.getHeaders()})
      .map(mapMovies);
      return film$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(id: number): Observable<Movie> {
    let movie$ = this.http
      .get(`${this.baseUrl}/films/${id}`, {headers: this.getHeaders()})
      .map(mapMovie);
      return movie$;
  }
}

function mapMovies(response:Response): Movie[]{
  return response.json().results.map(toMovie)
}

function toMovie(r:any): Movie{
  let movie = <Movie>({
    id: extractId(r),
    title: r.title,
    episode_id: Number.parseInt(r.episode_id),
    director: r.director,
    opening_crawl: r.opening_crawl
  });
  console.log('Parsed movie:', movie);
  return movie;
}

function extractId(movieData:any){
  let extractedId = movieData.url.replace('https://swapi.co/api/films/','').replace('/','');
  return parseInt(extractedId);
}

function mapMovie(response:Response): Movie{
   return toMovie(response.json());
}
