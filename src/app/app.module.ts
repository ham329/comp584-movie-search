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
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import {
  MovieSearchComponent,
  DialogOverviewExampleDialog
} from './movie-search/movie-search.component';
import {
  MovieDashboardComponent,
  DashboardDialog
} from './movie-dashboard/movie-dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import {
  FavoriteListComponent,
  FavoritesDialog
} from './favorite-list/favorite-list.component';
import { FirebaseService, LoginDialog } from './services/firebase.service';
import { AuthGuardService } from './services/auth-guard.service';

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
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    SlickModule,
    MatGridListModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    MovieSearchComponent,
    DialogOverviewExampleDialog,
    MovieDashboardComponent,
    DashboardDialog,
    AuthComponent,
    LoginComponent,
    LoginDialog,
    FavoriteListComponent,
    FavoritesDialog,
    RegisterComponent
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService, AuthGuardService],
  entryComponents: [
    LoginComponent,
    LoginDialog,
    MovieSearchComponent,
    DialogOverviewExampleDialog,
    MovieDashboardComponent,
    DashboardDialog,
    FavoriteListComponent,
    FavoritesDialog
  ]
})
export class AppModule {}
