import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesPageModule } from './pages/pages.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({

  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
    AppRoutingModule,
    PagesPageModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
