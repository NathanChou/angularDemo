import { Injectable } from '@angular/core';
import { MeetingRoom } from './meeting-room';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  public formData = new MeetingRoom();

  // rootUrl = 'http://localhost:5020/MeetingRooms'
  rootUrl = "";

  public list: MeetingRoom[] = [];

  constructor(private http: HttpClient) {
    this.rootUrl = environment.apiUrl;
  }

  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl)
    .subscribe({
      next: resp => this.list = resp,
      error: err => console.log(err)
    });
  }

  getByID(id: number) {
    this.http.get<MeetingRoom>(this.rootUrl + `/${id}`)
    .subscribe({
        next: resp => this.formData = resp,
        error: err => console.log(err)
    });
  }


  postMeetingRoom() {
    return this.http.post(this.rootUrl, this.formData);
  }

  putMeetingRoom() {
    return this.http.put(this.rootUrl + '/' + this.formData.id, this.formData);
  }

  deleteMeetingRoom(id: number) {
    return this.http.delete(this.rootUrl + '/' + id);
  }

}
