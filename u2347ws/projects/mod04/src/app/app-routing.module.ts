import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page7Component } from './page7/page7.component';

export const routes: Routes = [
  {path: 'p1', component: Page1Component, title: 'Property Binding'},
  {path: 'p2', component: Page2Component, title: 'Attr Binding'},
  {path: 'p3', component: Page3Component, title: 'class Binding'},
  {path: 'p4', component: Page4Component, title: 'Event Binding'},
  {path: 'p5', component: Page5Component, title: 'ngModel Binding'},
  {path: 'p7', component: Page7Component, title: 'ngSwitch'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
