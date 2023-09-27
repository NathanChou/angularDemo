import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConnToWebAPIService } from './conn-to-web-api.service';
import { WeatherForecast } from './weather-forecast';
import { Users } from './users';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'part2',
  templateUrl: './part2.component.html',
  styleUrls: []
})
export class Part2Component {

  constructor(private connToAPI: ConnToWebAPIService) { }

  result: string = "";

  wfList: WeatherForecast[] = [];

  user: any;

  optionResult: any;

  @ViewChild("img") img!: ElementRef;

  public progress: number = 0;
  public message: string = "";
  public imgsrc: string = "";

  Get117() {
    this.connToAPI.Get117().subscribe({
      next: resp => this.result = resp,
      error: error => console.log(error)
    });
  }


  GetWeatherForecast() {
    this.connToAPI.GetWeatherForecast().subscribe({
      next: resp => this.wfList = resp,
      error: error => console.log(error)
    });
  }

  GetUser(id: any) {
    this.connToAPI.GetUser(id).subscribe({
      next: resp => this.user = resp,
      error: error => console.log(error)
    });
  }

  GetUserByOptions(id: any, observe: string) {
    this.connToAPI.GetUserByOptions(111, observe).subscribe({
      next: resp => this.optionResult = `${observe}:${JSON.stringify(resp)}`,
      error: err => console.log(err)
    });
  }

  POSTUser(uid: string, uname: string) {
    let user = new Users(Number(uid), uname);
    this.connToAPI.POSTUser(user).subscribe({
      next: resp => this.result = resp,
      error: err => console.log(err)
    });
  }

  private downloadFile = (data: HttpResponse<Blob>, file: string) => {
    let body: any = data.body;
    const downloadedFile = new Blob([body], { type: data.body?.type });
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none');
    document.body.appendChild(a);
    a.download = file;
    a.href = URL.createObjectURL(downloadedFile);
    a.target = '_blank';
    a.click();
    this.img.nativeElement.src = a.href;
    console.log(a);
    document.body.removeChild(a);
  }

  GetDownload(file: string) {
    if (!file || file == "") return
    this.progress = 0;
    this.connToAPI.GetDownload(file).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.DownloadProgress) {
          let total: number | any = event.total?.valueOf();
          this.progress = Math.round((100 * event.loaded) / total);
          console.log(this.progress);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Download success';
          console.log(this.message);
          this.downloadFile(event, file);
        }
      },
      error: err => console.log(err),
      complete: () => console.log('done')
    });
  }
}
