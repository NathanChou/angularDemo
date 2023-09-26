import { Component } from '@angular/core';
import { Student, students } from '../student';

@Component({
  selector: 'page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})

export class Page7Component {
  
  students: Student[] = students;

  thisMonth: number;


  constructor() {
    this.thisMonth = new Date(Date.now()).getMonth();
  }

  ngOnInit():void {
    
  }
}
