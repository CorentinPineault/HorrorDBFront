import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesOverviewComponent } from './components/series-overview/series-overview.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesFormComponent } from './components/series-form/series-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FrontpageComponent } from './components/frontpage/frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesOverviewComponent,
    SeriesListComponent,
    SeriesFormComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
