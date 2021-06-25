import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesListComponent } from "./components/series-list/series-list.component";
import { SeriesFormComponent } from "./components/series-form/series-form.component";
import { SeriesOverviewComponent } from "./components/series-overview/series-overview.component";
import { FrontpageComponent } from "./components/frontpage/frontpage.component";

const routes: Routes = [
  { path: '', component: FrontpageComponent},
  { path: 'webseries', component: SeriesListComponent },
  { path: 'webseries/:id', component: SeriesOverviewComponent },
  { path: 'add', component: SeriesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
