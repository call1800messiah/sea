import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DateModule } from './modules/date/date.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
        AppComponent
  ],
  imports: [
        BrowserModule,
        DateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
