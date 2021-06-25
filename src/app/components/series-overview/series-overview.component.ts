import { Component, OnInit } from '@angular/core';
import { WebSeriesService } from "../../services/web-series-service";
import { ActivatedRoute, Router} from "@angular/router";
import { WebSeries } from "../../model/webseries";

@Component({
  selector: 'app-series-overview',
  templateUrl: './series-overview.component.html',
  styleUrls: ['./series-overview.component.css']
})
export class SeriesOverviewComponent implements OnInit {

  currentWS: WebSeries = {
    name: '',
    desc: '',
    startDate: undefined,
    endDate: undefined,
    link: ''
  }
  message ='';

  constructor(
    private wsService: WebSeriesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getWebSeries(this.route.snapshot.params.id);
  }

  getWebSeries(id: string): void {
    this.wsService.get(id)
      .subscribe(
        data => {
          this.currentWS = data;
          console.log(data);
        },
        error => {
          console.log(error)
        });
  }

  updatePublished(): void {
    const data = {
      title: this.currentWS.name,
      description: this.currentWS.desc,
      startDate: this.currentWS.startDate,
      endDate: this.currentWS.endDate,
      link: this.currentWS.link
    };

    this.message = '';

    this.wsService.update(this.currentWS.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Série mise à jour avec succès!';
        },
        error => {
          console.log(error);
        });
  }

  updateWS(): void {
    this.message = '';

    this.wsService.update(this.currentWS.id, this.currentWS)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Série mise à jour avec succès!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.wsService.delete(this.currentWS.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/webseries']);
        },
        error => {
          console.log(error);
        });
  }
}
