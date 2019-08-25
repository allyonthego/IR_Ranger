import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AnimalService} from "./animal.service";

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatDividerModule, MatTableModule, MatToolbarModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogonComponent } from './logon/logon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { LatestimageComponent } from './latestimage/latestimage.component';
import { LogontextComponent } from './logon/logontext/logontext.component';
import { ButtonComponent } from './button/button.component';
import { InputfieldComponent } from './inputfield/inputfield.component';
import { DashboardelementsComponent } from './dashboard/dashboardelements/dashboardelements.component';
import { DashboardelementsrightComponent } from './dashboard/dashboardelementsright/dashboardelementsright.component';
import { ButtonDarkComponent } from './button-dark/button-dark.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImageheaderComponent } from './imageheader/imageheader.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    DashboardComponent,
    StatsComponent,
    LatestimageComponent,
    LogontextComponent,
    ButtonComponent,
    InputfieldComponent,
    DashboardelementsComponent,
    DashboardelementsrightComponent,
    ButtonDarkComponent,
    FooterComponent,
    HeaderComponent,
    ImageheaderComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
