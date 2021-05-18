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
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent, LoginDialog } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FirebaseService } from './services/firebase.service';
import { ModalComponent } from './auth/components/login/modal/modal.component';

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
    SlickModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MovieSearchComponent,
    MovieDashboardComponent,
    AuthComponent,
    LoginComponent,
    LoginDialog,
    FavoriteListComponent,
    RegisterComponent,
    ModalComponent,
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService],
  entryComponents: [LoginComponent, LoginDialog]
})
export class AppModule {}
