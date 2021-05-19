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

import {MatTooltipModule} from '@angular/material/tooltip';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu'
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FirebaseService, LoginDialog } from './services/firebase.service';
// import { MovieCarouselComponent } from './movie-dashboard/movie-carousel/movie-carousel.component';
import {DialogElementsExample, DialogElementsExampleDialog} from './dialog/dialog-elements-example';

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
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    SlickModule,
    MatGridListModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  entryComponents: [DialogElementsExample, DialogElementsExampleDialog],

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
  ],
  bootstrap: [AppComponent, DialogElementsExample],
  providers: [FirebaseService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  entryComponents: [LoginComponent, LoginDialog]
    DialogElementsExample,
    DialogElementsExampleDialog,
   
    RegisterComponent
  ],

//   bootstrap: [AppComponent,DialogElementsExample],
//   providers: [
//     { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
//   ]

})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
