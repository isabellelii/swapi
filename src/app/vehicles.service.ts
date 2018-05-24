import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Transport } from './transport';

const VEHICLES : Transport[] = [
    {id: 1, name: 'Sand Crawler', model: 'Digger Crawler', length: 36.8, max_atmosphering_speed: 30, crew: 46, passengers: 50000, vehicles_class: 'wheeled'},
    {id: 2, name: 'Sand Crawler', model: 'Digger Crawler', length: 36.8, max_atmosphering_speed: 30, crew: 46, passengers: 50000, vehicles_class: 'wheeled'},
    {id: 3, name: 'Sand Crawler', model: 'Digger Crawler', length: 36.8, max_atmosphering_speed: 30, crew: 46, passengers: 50000, vehicles_class: 'wheeled'},
  ];

  @Injectable()
  export class VehiclesService{
    private baseUrl: string = 'https://swapi.co/api';
    constructor(private http : Http){
    }

    getAll(): Observable<Transport[]>{
      let vehicles$ = this.http
        .get(`${this.baseUrl}/vehicles/`, { headers: this.getHeaders()})
        .map(mapTransports);
        return vehicles$;
    }

    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
    get(id: number): Observable<Transport> {
      let transport$ = this.http
        .get(`${this.baseUrl}/vehicles/${id}`, {headers: this.getHeaders()})
        .map(mapTransport);
        return transport$;
    }
  }

  function mapTransports(response:Response): Transport[]{
    return response.json().results.map(toTransport)
  }

  function toTransport(r:any): Transport{
    let transport = <Transport>({
      id: extractId(r),
      name: r.name,
      length: Number.parseInt(r.length),
      crew: Number.parseInt(r.crew),
      model: r.model,
      vehicles_class: r.vehicle_class,
      passengers: Number.parseInt(r.passengers),
      max_atmosphering_speed: Number.parseInt(r.max_atmosphering_speed)
    });
    console.log('Parsed vehicles:', transport);
    return transport;
  }

  function extractId(transportData:any){
    let extractedId = transportData.url.replace('https://swapi.co/api/vehicles/','').replace('/','');
    return parseInt(extractedId);
  }

  function mapTransport(response:Response): Transport{
     return toTransport(response.json());
  }
