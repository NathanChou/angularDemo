import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from './weather-forecast';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ConnToWebAPIService {

  readonly rootUrl = "https://mod08api.azurewebsites.net";

  constructor(private http: HttpClient) {}

  Get117Test() {
    this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text'} )
    .subscribe({
      next: resp => console.log(resp),
      error: error => console.log(error)
    })
  }

  Get117(): Observable<string> {
    return this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text'} );
  }

  GetWeatherForecast() {
    return this.http.get<WeatherForecast[]>(`${this.rootUrl}/WeatherForecast`);
  }

  GetUser(id: number) {
    return this.http.get<Users>(`${this.rootUrl}/WeatherForecast/${id}`);
  }

  GetUserByOptions(id: number, observe: string) {
    let options: any;

    switch (observe) {
      case "body":
        options = { observe: 'body', responseType: 'text' };
        break;
      case "response":
        options = { observe: 'response' as 'response', responseType: 'text' as 'text' };  
        break;
      default:
        options = {};
    }

    return this.http.get(`${this.rootUrl}/WeatherForecast/${id}`, options);
  }
  
  POSTUser(user: Users) {
    return this.http.post(`${this.rootUrl}/WeatherForecast/`, user,{responseType: 'text'});
  }


  GetDownload(file: string) {
    return this.http.get(`${this.rootUrl}/WeatherForecast/download/${file}`,
    {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

}
