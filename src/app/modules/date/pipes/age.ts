import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';

import { DateService } from './../date.service';


@Pipe({name: 'tdeAge', pure: false})
export class AgePipe implements PipeTransform {
    private latestDate: number;
    private promise: Promise<number>;
     
    constructor(private dateService: DateService, private _ref: ChangeDetectorRef){}
    
    transform(birthday: number): any {
        if(!this.promise) {
            (this.promise = this.dateService.getCurrentDate()).then((date)=> {
                this.latestDate = date;
                this._ref.markForCheck();
            });
        }
        
        return Math.floor((this.latestDate-birthday)/365) + ' Jahre';
    }        
}