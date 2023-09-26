import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box/search-box.component';
import { Page7Component } from './page7/page7.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    SearchBoxComponent,
    Page7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
