import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'https://swapi.co/api/'
  data: any = {};

  constructor(private http: Http) {
    console.log('hey you');
    this.getAll();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getAll() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
}
