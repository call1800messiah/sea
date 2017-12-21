import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';
import { ParseService } from './modules/db/parse.service';
import { PersonModule } from './modules/person/person.module';
import { PersonService } from './modules/person/person.service';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        PersonModule
    ],
    providers: [PersonService, ParseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
