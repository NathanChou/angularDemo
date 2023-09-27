import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

export const routes: Routes = [
  { path: 'part1', component: Part1Component, data: ['DI 與 Service'] },
  { path: 'part2', component: Part2Component, data: ['使用Service 存取 HttpClient'] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
