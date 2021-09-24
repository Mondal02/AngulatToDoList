import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataEntryMondayComponent } from './data-entry-monday/data-entry-monday.component';
import { DataListMondayComponent } from './data-list-monday/data-list-monday.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialMondayModule } from './material-monday/material-monday.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DataEntryMondayComponent,
    DataListMondayComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialMondayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
