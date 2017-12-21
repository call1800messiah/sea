import { CommonModule }   from '@angular/common';
import { NgModule } from '@angular/core';

import { ParseService } from './parse.service';

@NgModule({
    exports: [
        ParseService
    ],
    imports: [
        CommonModule
    ],
    providers: [ ParseService ]
})
export class DBModule { }
