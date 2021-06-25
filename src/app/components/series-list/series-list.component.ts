import { Component, OnInit } from '@angular/core';
import { WebSeries } from "../../model/webseries";
import { WebSeriesService } from "../../services/web-series-service";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  webseries?: WebSeries[];
  currentWS?: WebSeries;
  currentIndex = -1;
  name = '';

  constructor(private wsService: WebSeriesService) { }

  ngOnInit(): void {
    this.getWebSeries();
  }

  getWebSeries(): void {
    this.wsService.findAll()
      .subscribe(
        data => {
          this.webseries = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.getWebSeries();
    this.currentWS = undefined;
    this.currentIndex = -1;
  }

  setActiveWebSeries(ws: WebSeries, index: number): void {
    this.currentWS = ws;
    this.currentIndex = index;
  }

  searchName(): void {
    this.wsService.findByTitle(this.name)
      .subscribe(
        data => {
          this.webseries = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
