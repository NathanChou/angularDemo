import { Component, ContentChildren, Input } from '@angular/core';

@Component({
  selector: 'CheckStock',
  templateUrl: './check-stock.component.html',
  styleUrls: ['./check-stock.component.css']
})
export class CheckStockComponent {

  @Input() Stock: number = 0;
  @Input() QTY = 0;
  
  info = ""; lower = false;

  @ContentChildren('span') spans:any;

  ngOnChanges() {
    // this.lower = (this.Stock < this.QTY);
    // this.info = this.lower ? `低於庫存，目前只有 ${this.Stock}` : '';
    console.log("ngOnChanges -");
  }

  ngDoCheck() {
    this.lower = (this.Stock < this.QTY);
    this.info = this.lower ? `低於庫存，目前只有 ${this.Stock}` : '';
    console.log("ngDoCheck -");
  }


  GetStock() {
    this.Stock = 20;
    console.log(this.Stock);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit -');
    
    this.spans.forEach((element:any) => {
      console.log("\t", element);
    });
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked -');
    
    this.spans.forEach((element:any) => {
      console.log("\t", element);
    });
  }
}
