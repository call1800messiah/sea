import { InMemoryDbService } from 'angular-in-memory-web-api';

import {Person} from './modules/person/classes/person';
import {ListEntry} from './modules/input/classes/list-entry';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const people = [
            new Person (0,'Bob',236284,new ListEntry(0,'Frank')),
            new Person (1,'Carl',232133,new ListEntry(1,'Chad')),
            new Person (2,'Ed',232672,new ListEntry(0,'Henry'))
        ];
        return {people};
    }
}
