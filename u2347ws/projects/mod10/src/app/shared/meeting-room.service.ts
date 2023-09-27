import { Injectable } from '@angular/core';
import { MeetingRoom } from './meeting-room';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  public formData = new MeetingRoom();

  rootUrl = 'http://localhost:5020/MeetingRooms'

  public list: MeetingRoom[] = [];

  constructor(private http: HttpClient) {}

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
}
