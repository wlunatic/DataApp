import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { SiteComponent } from './site/site.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  //no layout routes
  { path: 'login', component: LoginComponent},

  //Site routes goes here 
  { path: '', component: SiteComponent,},

  // App routes goes here here

  { path: 'overview', component: OverviewComponent },
  { path: 'details', component: DetailsComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
