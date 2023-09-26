import { Component } from '@angular/core';
import { MeetingRoom } from '../meeting-room';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  public meetingRoom: MeetingRoom;
  public capacity = ['5人', '10人', '20人', '30人', '40人'];

  constructor() {
    this.meetingRoom = new MeetingRoom(101, '哥多華', this.capacity[2], false, true);
  }

  submitted: Boolean = false;

  onSubmit(roomForm: NgForm) {
    if(roomForm.valid)
    console.log(roomForm.value)
    this.submitted = true;
  }

  newMeetingRoom() {
    this.meetingRoom = new MeetingRoom(102, '', '');
  }
}
