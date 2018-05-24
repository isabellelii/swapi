import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Animal } from './animal';

const SPECIES : Animal[] = [
    {id: 1, name: 'Hutt', classification: 'gastropod', average_height: 300, hair_color: 'n/a', eye_colors: 'yellow', average_lifespan: 1000, language: 'Huttese'},
    {id: 1, name: 'Hutt', classification: 'gastropod', average_height: 300, hair_color: 'n/a', eye_colors: 'yellow', average_lifespan: 1000, language: 'Huttese'},
    {id: 1, name: 'Hutt', classification: 'gastropod', average_height: 300, hair_color: 'n/a', eye_colors: 'yellow', average_lifespan: 1000, language: 'Huttese'}
  ];

  @Injectable()
  export class SpeciesService{
    private baseUrl: string = 'https://swapi.co/api';
    constructor(private http : Http){
    }

    getAll(): Observable<Animal[]>{
      let species$ = this.http
        .get(`${this.baseUrl}/species/`, { headers: this.getHeaders()})
        .map(mapAnimals);
        return species$;
    }

    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
    get(id: number): Observable<Animal> {
      let animal$ = this.http
        .get(`${this.baseUrl}/species/${id}`, {headers: this.getHeaders()})
        .map(mapAnimal);
        return animal$;
    }
  }

  function mapAnimals(response:Response): Animal[]{
    return response.json().results.map(toAnimal)
  }

  function toAnimal(r:any): Animal{
    let animal = <Animal>({
      id: extractId(r),
      name: r.name,
      average_height: Number.parseInt(r.average_height),
      average_lifespan: Number.parseInt(r.average_lifespan),
      classification: r.classification,
      eye_colors: r.eye_colors,
      hair_color: r.hair_color,
      language: r.language,
    });
    console.log('Parsed species:', animal);
    return animal;
  }

  function extractId(animalData:any){
    let extractedId = animalData.url.replace('https://swapi.co/api/species/','').replace('/','');
    return parseInt(extractedId);
  }

  function mapAnimal(response:Response): Animal{
     return toAnimal(response.json());
  }
