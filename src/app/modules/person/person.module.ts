import { CommonModule }   from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { DateModule } from './../date/date.module';
import { InputModule } from './../input/input.module';

import { PeopleListComponent } from './components/people-list';
import { PersonDetailsComponent } from './components/person-details';

@NgModule({
    declarations: [
        PeopleListComponent,
        PersonDetailsComponent
    ],
    exports: [
        PeopleListComponent,
        PersonDetailsComponent
    ],
    imports: [
        CommonModule,
        DateModule,
        FormsModule,
        InputModule
    ],
    providers: []
})
export class PersonModule { }
