import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }
  
  dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Carpina,BR&appid=eaa74250cc20cc62c2d8a85b45505887")
      .map(result => result);
  }

}
