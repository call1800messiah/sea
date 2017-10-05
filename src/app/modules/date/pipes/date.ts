import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from './../date.service';

@Pipe({
    name: 'tdeDate'
})
export class DatePipe implements PipeTransform {
    constructor(private dateService: DateService){}
    
    transform(value: number): string {
        let date = this.dateService.getDateForValue(value);
        let month = this.dateService.getMonthString(date.month);
        
        return date.day+'. '+month+' '+date.year+' '+date.age;
    }
}
