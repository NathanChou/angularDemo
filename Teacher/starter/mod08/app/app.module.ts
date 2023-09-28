import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './part1/part1.component';
import { Page1Component } from './part1/page1/page1.component';
import { Page2Component } from './part1/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
