import { CommonModule }   from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AgePipe } from './pipes/age';
import { DatePipe } from './pipes/date';
import { DateService } from './date.service';
import { DateComponent } from './components/date';

@NgModule({
    declarations: [
        AgePipe,
        DateComponent,
        DatePipe
    ],
    exports: [AgePipe,DateComponent, DatePipe],
    imports: [CommonModule,FormsModule],
    providers: [DateService],
})
export class DateModule { }

