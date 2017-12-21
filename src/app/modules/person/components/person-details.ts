import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ListEntry } from './../../input/classes/list-entry';
import { Person } from './../classes/person';
import { PersonService } from './../person.service';

@Component({
    selector: 'tde-person-details',
    templateUrl: './person-details.html',
    styleUrls: ['./person-details.css']
})
export class PersonDetailsComponent implements OnInit {
    person: Person;
    test = {
        list: [
            new ListEntry(1,'Bob'),
            new ListEntry(2,'Carl'),
            new ListEntry(3,'Ed')
        ]
    }
    
    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
    ){}
    
    addFather($event){
        this.test.list.push(
            new ListEntry(
                this.test.list[this.test.list.length-1].id,
                $event
            )
        );
    }
    
    ngOnInit():void{
        /*
        this.route.paramMap
            .switchMap((params: ParamMap) => this.personService.getPerson(+params.get('id')))
            .subscribe(person => this.person = person);
            */
    }
}

