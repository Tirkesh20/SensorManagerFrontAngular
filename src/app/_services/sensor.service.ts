import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sensor} from "../sensor/sensor";

@Injectable({providedIn: 'root'})
export class SensorService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getSensor(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.apiServerUrl}/sensor/all`);
  }

  public addSensor(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(`${this.apiServerUrl}/sensor/add`, sensor);
  }

  public updateSensor(sensor: Sensor): Observable<Sensor> {
    return this.http.put<Sensor>(`${this.apiServerUrl}/sensor/update`, sensor);
  }

  public deleteSensor(sensorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/sensord/delete/${sensorId}`);
  }
}
