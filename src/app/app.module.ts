import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import * as $ from "jquery";
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { UserdataService } from './_services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SiteComponent } from './site/site.component';
import { AdminComponent } from './admin/admin.component';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent,
    LoginComponent,
    SiteComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
    // HttpHeaders
    
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
