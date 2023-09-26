import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetingRoom } from '../meeting-room';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  
  public capacity = ['5人', '10人', '20人', '30人', '40人'];
  public meetingRoomForm: FormGroup;
  public meetingRoom: MeetingRoom;

  constructor(public builder: FormBuilder) {
    this.meetingRoom = new MeetingRoom(101 ,'哥多華', this.capacity[2], false, true);

    this.meetingRoomForm = this.builder.group({
      'id': ['', Validators.required],
      'name': ['', [Validators.required]],
      'size': [''],
      'projector': [''],
      'TV': ['']
    })
  }

  ngOnInit() {
    this.meetingRoomForm.setValue(this.meetingRoom);
  }

  onSubmit() {
    this.meetingRoom = this.meetingRoomForm.value;
  }
}
