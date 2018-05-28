import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Planet } from '../planet';

const ALLPLANETS : Planet[] = [
  {id: 1, name: 'Alderaan', rotation_period: 24, diameter: 12500, terrain: 'grasslands', population: 20000000, climate: 'temperate'},
  {id: 2, name: 'Alderaan', rotation_period: 24, diameter: 12500, terrain: 'grasslands', population: 20000000, climate: 'temperate'},
  {id: 3, name: 'Alderaan', rotation_period: 24, diameter: 12500, terrain: 'grasslands', population: 20000000, climate: 'temperate'},
];

@Injectable()
export class AllplanetsService{
  private baseUrl: string = 'https://swapi.co/api';

  constructor(private http : Http){}

  getAll(): Observable<Planet[]>{
    let allplanets$ = this.http
      .get(`${this.baseUrl}/planets/`, { headers: this.getHeaders()})
      .map(mapPlanets);
      return allplanets$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(id: number): Observable<Planet> {
    let planet$ = this.http
      .get(`${this.baseUrl}/planets/${id}`, {headers: this.getHeaders()})
      .map(mapPlanet);
      return planet$;
  }
}

function mapPlanets(response:Response): Planet[]{
  return response.json().results.map(toPlanet)
}

function toPlanet(r:any): Planet{
  let planet = <Planet>({
    id: extractId(r),
    name: r.name,
    rotation_period: Number.parseInt(r.rotation_period),
    diameter: Number.parseInt(r.diameter),
    population: Number.parseInt(r.population),
    terrain: r.terrain,
    climate: r.climate
  });
  console.log('Parsed planet:', planet);
  return planet;
}

function extractId(planetData:any){
  let extractedId = planetData.url.replace('https://swapi.co/api/planets/','').replace('/','');
  return parseInt(extractedId);
}

function mapPlanet(response:Response): Planet{
   return toPlanet(response.json());
}
