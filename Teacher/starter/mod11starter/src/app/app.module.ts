import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';


import { MeetingRoomsAppComponent } from './meeting-rooms-app/meeting-rooms-app.component';
import { MeetingRoomListComponent } from './meeting-rooms-app/meeting-room-list/meeting-room-list.component';
import { MeetingRoomDetailComponent } from './meeting-rooms-app/meeting-room-detail/meeting-room-detail.component';

import { ToastrModule } from 'ngx-toastr';
import { MeetingRoomService } from './shared/meeting-room.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    MeetingRoomsAppComponent,
    MeetingRoomListComponent, 
    MeetingRoomDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
    ToastrModule.forRoot(
      {positionClass:'toast-center-center'}
    ),
    BrowserAnimationsModule
  ],
  providers: [ MeetingRoomService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
