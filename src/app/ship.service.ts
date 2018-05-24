import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Starship } from './starship';

const SHIP : Starship[] = [
      {id: 1, name: 'Executor', model: 'Executor-class star dreadnought', crew: 279144, passengers: 38000, max_atmosphering_speed: 1000, starship_class: 'Star dreadnought'},
      {id: 2, name: 'Executor', model: 'Executor-class star dreadnought', crew: 279144, passengers: 38000, max_atmosphering_speed: 1000, starship_class: 'Star dreadnought'},
      {id: 3, name: 'Executor', model: 'Executor-class star dreadnought', crew: 279144, passengers: 38000, max_atmosphering_speed: 1000, starship_class: 'Star dreadnought'}
    ];

@Injectable()
export class ShipService{
  private baseUrl: string = 'https://swapi.co/api';
  constructor(private http : Http){
  }

  getAll(): Observable<Starship[]>{
    let ship$ = this.http
      .get(`${this.baseUrl}/starships/`, { headers: this.getHeaders()})
      .map(mapStarships);
      return ship$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(id: number): Observable<Starship> {
    let starship$ = this.http
      .get(`${this.baseUrl}/starships/${id}`, {headers: this.getHeaders()})
      .map(mapStarship);
      return starship$;
  }
}

function mapStarships(response:Response): Starship[]{
  return response.json().results.map(toStarship)
}

function toStarship(r:any): Starship{
  let starship = <Starship>({
    id: extractId(r),
    name: r.name,
    model: r.model,
    crew: Number.parseInt(r.crew),
    passengers: Number.parseInt(r.passengers),
    max_atmosphering_speed: Number.parseInt(r.max_atmosphering_speed),
    starship_class: r.starship_class
  });
  console.log('Parsed person:', starship);
  return starship;
}

function extractId(starshipData:any){
  let extractedId = starshipData.url.replace('https://swapi.co/api/starships/','').replace('/','');
  return parseInt(extractedId);
}

function mapStarship(response:Response): Starship{
   return toStarship(response.json());
}
