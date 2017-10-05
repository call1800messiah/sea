import { Injectable } from '@angular/core';

import { Date } from './classes/date';

@Injectable()
export class DateService {
    private currentDate: number = null;
    
    getCurrentDate(): Promise<number>{
        if (this.currentDate !== null){
            return Promise.resolve(this.currentDate);
        }else{
            this.currentDate = 375951;
            return Promise.resolve(this.currentDate);
        }
    }
    
    getDateForValue(value: number): Date {
        let day: number;
        let month: number;
        let year: number;
        let age: string;
        
        if (value > 0){
            year = Math.floor((value-1)/365);
            month = Math.floor(((value-1)%365) / 30);
            day = value - (year*365) - (month*30);
            age = 'BF';
        } else {
            age = 'v.BF';
        }
        
        return new Date(day,month,year,age);
    }
        
    getMonths(): string[]{
        return [
            'Praios','Rondra','Efferd','Travia','Boron','Hesinde','Firun','Tsa','Phex','Peraine','Ingerimm','Rahja','Namenlose Tage'
        ];
    }
    
    getMonthString(index:number): string{
        let months = this.getMonths();
        return months[index];
    }
    
    getValueForDate(date: Date): number{
        let value: number;
        value = (date.year * 365) + (date.month * 30) + date.day;   
        console.log(date);
        
        return value;
    }
}