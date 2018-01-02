import { Injectable } from '@angular/core';

import {ParseService} from './../db/parse.service';
import 'rxjs/add/operator/toPromise';

import { Person } from './classes/person';
import {EventEmitter} from 'events';

@Injectable()
export class PersonService {
    private people: Person[];
    private peopleSub: EventEmitter;
    private person: Person;
    private personSub: EventEmitter;
    
    constructor(private ParseService:ParseService) {

    }

    getAllPersons(): Person[] {
        /*
        return new Promise((resolve, reject) => {
            if(this.people) {
                resolve(this.people);
            } else {
                this.ParseService.getAllPersons().then(persons => {
                    this.people = persons;
                    resolve(this.people);
                });
            }
        });
        */
        this.peopleSub = this.ParseService.getAllPersons();
        this.peopleSub.on("create",(people:Person[])=> {
            this.people = people;
            console.log("Create",people);
        });
        return this.people;
    }
    
    getPerson(id:number):Person {
        return this.person;
    }
}
