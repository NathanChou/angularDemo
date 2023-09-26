import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  QTY: number = 12;
  Stock: number = 10;
  title = "購物車";

  vDate = new Date();
  vString = "This is a book";
  vMoney = 382140;
  vNumber = 39.85;
  vNumber2 = 31.11;
  vPercent = 10;

  @ViewChild("title1") h1:ElementRef | any;

  ngAfterViewInit() {
    console.log(this.h1.nativeElement);

    let title1 = this.h1.nativeElement;
    title1.addEventListener("click", ()=> title1.innerHTML = "title1 + click Event");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked:", this.h1.nativeElement);
  }
}
