import { Injectable } from '@angular/core';
import {EventEmitter} from 'events';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as Parse from 'parse';

import { Person } from '../person/classes/person';

@Injectable()
export class ParseService {   
    private peopleSubject: BehaviorSubject<{[id:string]: Person}>;
    private peopleSubscription: EventEmitter;
    private personSubject: Subject<Person>;
    private personSubscription: EventEmitter;
    
    
    constructor(){ 
        this.peopleSubject = new BehaviorSubject<{[id:string]: Person}>({});
        this.personSubject = new Subject<Person>();
        Parse.initialize("APPLICATION_ID");
        (<any>Parse).serverURL = 'http://localhost:1337/parse';
        
        // register classes
        Parse.Object.registerSubclass("Person", Person);
    }

    
    subscribe(query: Parse.Query): EventEmitter{             
        let subscription = <EventEmitter>(<any>query).subscribe();    
        return subscription;
    }
    
    getAllPersons(): Observable<Person[]> {
        if(!this.peopleSubscription) {
            let query = new Parse.Query<Person>("Person");
            let emitter = this.subscribe(query);
            query.find({
                success: (pArr: Person[]) => {
                    let people = this.peopleSubject.value;
                    pArr.forEach(p => people[p.id] = p);
                    this.peopleSubject.next(people);
                }
            });
            emitter.on('create', (p:Person) => {
                this.peopleSubject.value[p.id] = p;
                this.peopleSubject.next(this.peopleSubject.value);
            });
            emitter.on('update', (p:Person) => {
                this.peopleSubject.value[p.id] = p;
                this.peopleSubject.next(this.peopleSubject.value);
            });
            emitter.on('delete', (p:Person) => {
                delete this.peopleSubject.value[p.id];
                this.peopleSubject.next(this.peopleSubject.value);
            });
            
            this.peopleSubscription = emitter;
        }
        
        return this.peopleSubject.asObservable().map(arr => {
            let people: Person[] = [];
            Object.keys(arr).map(key => people.push(arr[key]));
            return people;
        });
    }
    
    getPerson(id:number):Observable<Person>{
        if (!this.personSubscription){
            let query = new Parse.Query<Person>("Person");
            query.equalTo('id',id);
            let emitter = this.subscribe(query);
            
            query.first({
                success: (p: Person) => {
                    this.personSubject.next(p);
                }
            });
            emitter.on('create', (p:Person) => {
                this.personSubject.next(p);
            });
            emitter.on('update', (p:Person) => {
                this.personSubject.next(p);
            });
            emitter.on('delete', (p:Person) => {
                //TODO: Redirect to people
            });
            
            this.personSubscription = emitter;
        }
        
        return this.personSubject.asObservable();
    }
};