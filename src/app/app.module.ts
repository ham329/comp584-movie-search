import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, MovieSearchComponent, MovieDashboardComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
