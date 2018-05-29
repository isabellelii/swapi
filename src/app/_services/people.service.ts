import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Person } from '../person';

const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70, gender: 'male', eye_color: 'blue', hair_color: 'blond'},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100, gender: 'male', eye_color: 'yellow', hair_color: 'none'},
      {id: 3, name: 'Han Solo', height: 185, weight: 85, gender: 'male', eye_color: 'brown', hair_color: 'brown'}
    ];

@Injectable()
export class PeopleService{
  private baseUrl: string = 'https://swapi.co/api';
  constructor(private http : Http){
  }

  getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people`, { headers: this.getHeaders()})
      .map(mapPersons);
      return people$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(id: number): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapPerson);
      return person$;
  }
}

function mapPersons(response:Response): Person[]{
  return response.json().results.map(toPerson)
}

function toPerson(r:any): Person{
  let person = <Person>({
    id: extractId(r),
    name: r.name,
    weight: Number.parseInt(r.mass),
    height: Number.parseInt(r.height),
    gender: r.gender,
    eye_color: r.eye_color,
    hair_color: r.hair_color
  });
  console.log('Parsed person:', person);
  return person;
}

function extractId(personData:any){
  let extractedId = personData.url.replace('https://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}

function mapPerson(response:Response): Person{
   return toPerson(response.json());
}
