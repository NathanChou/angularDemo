import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  name = "Life Cycle Hooks"
  title = 'component-lifecycle-hooks';
  num:number=0;
  ngOnInit() {
    setTimeout(() => {     
      this.name = (++this.num).toString();
      console.log(`外部改變 name : ${this.name}`);
    }, 3000);
   
  }

}
