import { Component } from '@angular/core';
import { MeetingRoomService } from '../shared/meeting-room.service';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styles: [
  ]
})
export class MeetingRoomListComponent {


  constructor(public service: MeetingRoomService) {}

  ngOnInit() {
    this.service.getList();
  }
}
