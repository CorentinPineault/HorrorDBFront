import { Component, OnInit } from '@angular/core';
import { WebElement } from 'src/app/model/webelement';
import { WebEntryService } from 'src/app/services/web-entry.service';

@Component({
  selector: 'app-web-list',
  templateUrl: './web-list.component.html',
  styleUrls: ['./web-list.component.css']
})
export class WebListComponent implements OnInit {
  webelements?: WebElement[];
  currentWeb?: WebElement;
  currentIndex = -1;
  name = '';

  constructor(private weService: WebEntryService) { }

  ngOnInit(): void {
    this.getWebElements();
  }

  getWebElements(): void {
    this.weService.findAll()
      .subscribe(
        data => {
          this.webelements = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.getWebElements();
    this.currentWeb = undefined;
    this.currentIndex = -1;
  }

  setActiveWebElement(we: WebElement, index: number): void {
    this.currentWeb = we;
    this.currentIndex = index;
  }
}
