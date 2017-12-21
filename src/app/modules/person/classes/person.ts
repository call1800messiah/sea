import * as Parse from 'parse';

export class Person extends Parse.Object {

    get name(): string {
        return this.get("name");
    }

    set name(value:string) {
        this.set("name", value);
    }

    public birthday: number;
    public father: Person;

    constructor(){
        super('Person');
    }

}