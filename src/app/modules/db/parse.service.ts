import { Injectable } from '@angular/core';
import {EventEmitter} from 'events';
import * as Parse from 'parse';
import { Person } from '../person/classes/person';

@Injectable()
export class ParseService {
    private personSub: EventEmitter;
    
    constructor(){ 
        Parse.initialize("APPLICATION_ID");
        (<any>Parse).serverURL = 'http://localhost:1337/parse';
        
        // register classes
        Parse.Object.registerSubclass("Person", Person);
    }

    
    subscribe(query: Parse.Query): EventEmitter{             
        let subscription = <EventEmitter>(<any>query).subscribe();    
        return subscription;
    }
    
    getAllPersons(): Parse.Promise<Person[]> {
        let query = new Parse.Query<Person>("Person");
        this.personSub = this.subscribe(query);
        return query.find();
    }
};