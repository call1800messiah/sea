import { Component,EventEmitter,Input,Output,OnInit } from '@angular/core';
import { DateService} from './../date.service';
import { Date } from './../classes/date';

@Component({
    selector: 'tde-date',
    templateUrl: './date.html',
    styleUrls: ['./date.css']
})
export class DateComponent implements OnInit {
    @Input() value: number;
    @Output() valueChange = new EventEmitter();
    date: Date;
    months: string[];
    
    constructor(private dateService:DateService){}
    
    ngOnInit(){
        this.months = this.dateService.getMonths();
        this.date = this.dateService.getDateForValue(this.value);
    }
    
    updateDate(){
        this.date = this.dateService.getDateForValue(this.value);
        this.valueChange.emit(this.value);
    }
    
    updateValue(day,month,year){
        this.date.day = parseInt(day);
        this.date.month = parseInt(month);
        this.date.year = parseInt(year);
        this.value = this.dateService.getValueForDate(this.date);
        this.valueChange.emit(this.value);
    }
}