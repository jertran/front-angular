import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Town } from './town';

@Injectable()
export class WeatherService {
  setLatLng$: Observable<any>;
  private _coordsTrigger = new Subject<any>();
  private _locationTrigger = new Subject<any>();
  private lat;
  private lng;
  
  readonly ROOT_URL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/31fb9ed2fc5a7c2766847cefdcca8570/";
  readonly JSON_URL = "https://cors-anywhere.herokuapp.com/https://projet-app.herokuapp.com/towns/";
  
  constructor(private http: HttpClient) { 
    this.setLatLng$ = this._coordsTrigger.asObservable();
  }

  currentForecast(): Observable<any> {
    return this.http.get(this.ROOT_URL + this.lat.toString() + "," + this.lng.toString());
  }
  
  setLatLng(data) {
      this.lat = data[0];
      this.lng = data[1];
      this._coordsTrigger.next(data);
  }
  
  newForecastRequest() {
    this._locationTrigger.next();
  }

  get locationsTrigger$() {
    return this._locationTrigger.asObservable();
  }
  
  public getTownById(id: number): Observable<Town> {
    return this.http.get<Town>(this.JSON_URL + id + ".json");
  }

}
