import { NgModule }             from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { PeopleListComponent } from './modules/person/components/people-list';
import { PersonDetailsComponent } from './modules/person/components/person-details';

const routes: Routes = [
    { path: '', redirectTo: '/people', pathMatch: 'full' },
    { path: 'person/:id', component: PersonDetailsComponent },
    { path: 'people',     component: PeopleListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

