import { Component } from '@angular/core';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  members = ["Jenny", "Vivaid", "Kitty", "Dennis", "Eddie", "Frankie"];
  // members:any = [];

  getName(index: number): string {
    if (index < 0 || index > this.members.length)
      return '超出索引範圍';
    return this.members[index];
  }
}
