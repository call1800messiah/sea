import { CommonModule }   from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { ListSelectComponent } from './components/list-select';

@NgModule({
    declarations: [
        ListSelectComponent
    ],
    exports: [ListSelectComponent],
    imports: [CommonModule,FormsModule],
    providers: []
})
export class InputModule { }
