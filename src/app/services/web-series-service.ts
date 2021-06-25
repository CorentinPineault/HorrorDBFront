import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WebSeries } from "../model/webseries";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:8080/api/webseries';

@Injectable({
  providedIn: 'root'
})
export class WebSeriesService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<WebSeries[]> {
    return this.http.get<WebSeries[]>(baseUrl);
  }

  public get(id: any): Observable<WebSeries> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  public save(webs: WebSeries) {
    return this.http.post<WebSeries>(baseUrl, webs);
  }

  findByTitle(name: any): Observable<WebSeries[]> {
    return this.http.get<WebSeries[]>(`${baseUrl}?name=${name}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
