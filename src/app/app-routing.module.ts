import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesListComponent } from "./components/series-list/series-list.component";
import { SeriesFormComponent } from "./components/series-form/series-form.component";
import { SeriesOverviewComponent } from "./components/series-overview/series-overview.component";
import { FrontpageComponent } from "./components/frontpage/frontpage.component";
import { WebFormComponent } from './components/web-form/web-form.component';
import { WebListComponent } from './components/web-list/web-list.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent},
  { path: 'web', component: WebListComponent },
  { path: 'webseries', component: SeriesListComponent },
  { path: 'webseries/:id', component: SeriesOverviewComponent },
  { path: 'addWeb', component: WebFormComponent },
  { path: 'addSeries', component: SeriesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
