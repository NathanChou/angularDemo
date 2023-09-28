import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MeetingRoom } from './meeting-room';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public formData: MeetingRoom = { id: 0, name: "", size: -1 };
  public list: MeetingRoom[] = [];
  readonly rootUrl = 'https://localhost:44300/MeetingRooms'
  constructor(private http: HttpClient) {

  }

  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl)
      .toPromise()
      .then(resp => this.list = resp as MeetingRoom[]);
  }

  postMeetingRoom() {
    return this.http.post(this.rootUrl, this.formData);
  }
  putMeetingRoom() {
    return this.http.put(this.rootUrl + '/' + this.formData.id, this.formData);
  }
  deleteMeetingRoom(id:number) {
    return this.http.delete(this.rootUrl + '/' + id);
  }
}
