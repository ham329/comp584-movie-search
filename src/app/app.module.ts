import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SlickModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MovieSearchComponent,
    MovieDashboardComponent,
    AuthComponent
  ],
  bootstrap: [AppComponent]
  // =======
  // import { FavoriteListComponent } from './favorite-list/favorite-list.component';
  // import { LoginComponent } from './login/login.component';

  // @NgModule({
  //   imports: [BrowserModule, FormsModule, HttpClientModule],
  //   declarations: [
  //     AppComponent,
  //     HelloComponent,
  //     MovieSearchComponent,
  //     MovieDashboardComponent,
  //     FavoriteListComponent,
  //     LoginComponent
  //   ],
  //   bootstrap: [AppComponent]
  // >>>>>>> master
})
export class AppModule {}
