import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ParseService} from './../db/parse.service';

import { Person } from './classes/person';


@Injectable()
export class PersonService {    
    constructor(private ParseService:ParseService) {

    }

    getAllPersons(): Observable<Person[]> {
        return this.ParseService.getAllPersons();
    }
    
    getPerson(id:number):Observable<Person> {
        return this.ParseService.getPerson(id);
    }
}
