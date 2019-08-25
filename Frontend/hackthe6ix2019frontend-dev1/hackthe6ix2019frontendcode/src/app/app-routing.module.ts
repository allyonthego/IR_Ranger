import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogonComponent} from "./logon/logon.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StatsComponent} from "./stats/stats.component";
import {LatestimageComponent} from "./latestimage/latestimage.component";
import {NotfoundComponent} from "./notfound/notfound.component";


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'stats', component: StatsComponent},
  { path: 'latestimage', component: LatestimageComponent},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
