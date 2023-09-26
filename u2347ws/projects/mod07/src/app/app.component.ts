import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mod07';
  rentRoom = { name: "", number: "", extNo: "", startDate: "", endDate: "" };
  capacity = ['5人', '10人', '20人', '30人', '40人'];

}
