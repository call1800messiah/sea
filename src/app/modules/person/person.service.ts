import { Injectable } from '@angular/core';

import {ParseService} from './../db/parse.service';
import 'rxjs/add/operator/toPromise';

import { Person } from './classes/person';
import {EventEmitter} from 'events';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class PersonService {
    private people: Person[];
    private peopleSubject = new BehaviorSubject<Person[]>([]);
    private peopleSub: EventEmitter;
    
    constructor(private ParseService:ParseService) {

    }

    getAllPersons(): Observable<Person[]> {
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

        return this.peopleSubject.asObservable();
    }
    
}
