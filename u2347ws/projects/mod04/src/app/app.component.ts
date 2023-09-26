import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mod04';
  routeList = routes;
  mySearch: string = "";
  isTouch:boolean = false;
  isFound:boolean = false;
  resultStyles = {};


  onTextChange(search: string) {
    this.isTouch = true;
    this.isFound = search.length>3;
    this.resultStyles = {
      'border': this.isFound ? 'sold 3px blue' : 'sold 3px red',
      'color': this.isFound ? 'black' : 'red',
      'background-color': this.isFound ? 'yello': 'white'
    }
  }
}
