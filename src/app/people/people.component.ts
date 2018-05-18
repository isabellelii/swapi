import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  private apiUrl = 'https://swapi.co/api/'
  data: any = {};

  constructor(private http: Http) {
    console.log('hey you');
    this.getPeople();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getPeople() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }

}
