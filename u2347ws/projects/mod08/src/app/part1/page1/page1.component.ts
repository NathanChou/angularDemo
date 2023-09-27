import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'page1',
  template: `
    <p>
      page1 works!
    </p>
    <h1>{{ s1.a }}</h1>
    <button (click)="Display()">
      Display()
    </button>
    
  `,
  styleUrls: [

  ],
  providers: [
    Service1Service
  ]

})

export class Page1Component {


  constructor(public s1: Service1Service) {
    s1.a = "data1";
  }

  ngOnInit(): void {}

  Display() {
    console.log("form page1:" + this.s1.a);
  }

}
