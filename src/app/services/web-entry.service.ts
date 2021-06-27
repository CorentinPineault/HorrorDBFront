import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WebSeries } from "../model/webseries";
import { Observable } from "rxjs";
import { WebElement } from '../model/webelement';

const baseUrl = 'http://localhost:8080/api/weblist';

@Injectable({
  providedIn: 'root'
})
export class WebEntryService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<WebElement[]> {
    return this.http.get<WebSeries[]>(baseUrl);
  }

  public get(id: any): Observable<WebElement> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  public save(webs: WebElement) {
    return this.http.post<WebSeries>(baseUrl, webs);
  }

  findByTitle(name: any): Observable<WebElement[]> {
    return this.http.get<WebSeries[]>(`${baseUrl}?name=${name}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
