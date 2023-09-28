import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1Component } from './part1/part1.component';

export const routes: Routes = [
  { path: 'part1', component: Part1Component, data:['DI 與 Service']},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
