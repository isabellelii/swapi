import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PeopleService } from "../people.service";
import { Person } from "../person";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
})

export class PersonDetailsComponent implements OnInit, OnDestroy {
    person: Person;
    sub: any;

    constructor(private peopleService: PeopleService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting person with id: ', id);
          this.peopleService
            .get(id)
            .subscribe(p => this.person = p);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoPeoplesList(){
        let link = ['/persons'];
        this.router.navigate(link);
    }
  }
