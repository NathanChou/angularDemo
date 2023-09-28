import { Component } from '@angular/core';
import { MeetingRoomService } from '../shared/meeting-room.service';
import { MeetingRoom } from '../shared/meeting-room';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styles: [
  ]
})
export class MeetingRoomListComponent {

  constructor(public service: MeetingRoomService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.service.getList();
  }


  public populateForm(mr: MeetingRoom) {
    this.service.getByID(mr.id);
  }

  onInsert() {
    this.service.formData = new MeetingRoom();
  }

  onDelete(mr: MeetingRoom) {
    if (confirm(`確定刪除 會議室:${mr.name} 資料卡?`)) {
      this.service.deleteMeetingRoom(mr.id).subscribe({
        next: resp => {
          this.toastr.success('刪除成功', '會議室資料卡');
          this.service.getList();
          this.onInsert();
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

}
