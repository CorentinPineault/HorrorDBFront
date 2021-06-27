import { Component, OnInit } from '@angular/core';
import { WebElement } from 'src/app/model/webelement';
import { WebEntryService } from 'src/app/services/web-entry.service';
@Component({
  selector: 'app-web-form',
  templateUrl: './web-form.component.html',
  styleUrls: ['./web-form.component.css']
})
export class WebFormComponent implements OnInit {
  we: WebElement = {
    name: '',
    desc: '',
    link: ''
  }
  submitted = false;

  constructor(private weService : WebEntryService) { }

  ngOnInit(): void {
  }

  addWebElement(): void {
    const data = {
      name: this.we.name,
      desc: this.we.desc,
      link: this.we.link,
    };

    this.weService.save(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newWebElement(): void {
    this.submitted = false;
    this.we = {
      name: '',
      desc: '',
      link: ''
    };
  }

}
