import { Component, OnInit } from '@angular/core';
import { WebSeries } from "../../model/webseries";
import { WebSeriesService } from "../../services/web-series-service";

@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.css']
})
export class SeriesFormComponent implements OnInit {
  ws: WebSeries = {
    name: '',
    desc: '',
    startDate: undefined,
    endDate: undefined,
    link: ''
  }
  submitted = false;

  constructor(private wsService : WebSeriesService) { }

  ngOnInit(): void {
  }

  addWebSeries(): void {
    const data = {
      name: this.ws.name,
      desc: this.ws.desc,
      startDate: this.ws.startDate,
      endDate: this.ws.endDate,
      link: this.ws.link
    };

    this.wsService.save(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newWebSeries(): void {
    this.submitted = false;
    this.ws = {
      name: '',
      desc: '',
      startDate: undefined,
      endDate: undefined,
      link: ''
    };
  }

}
