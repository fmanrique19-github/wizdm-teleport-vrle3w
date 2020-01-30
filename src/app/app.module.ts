import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatDividerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
//import { TelebarModule } from './telebar/telebar.module'; 
import { TeleportModule } from './teleport/teleport.module'; 
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [   
    BrowserModule, 
    BrowserAnimationsModule, 
    FlexLayoutModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    TeleportModule,
    AppRoutingModule
  ],
  
  declarations: [ 
    AppComponent, 
    HomeComponent,
    NotFoundComponent,
    Page1Component,
    Page2Component
  ],

  providers: [],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
