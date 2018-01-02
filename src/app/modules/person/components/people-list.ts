import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './../classes/person';
import { PersonService } from './../person.service';

@Component({
    selector: 'tde-people-list',
    templateUrl: './people-list.html',
    styleUrls: ['./people-list.css']
})
export class PeopleListComponent implements OnInit {
    people: Person[];
    
    constructor(private personService: PersonService, private router: Router){}
    
    ngOnInit(): void {
        this.people = this.personService.getAllPersons();
    }
    
    onSelect(person: Person): void {
        this.router.navigate(['/person', person.id]);
    }
}