import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthComponent } from './auth/auth.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'dashboard',
    component: MovieDashboardComponent,
    canActivate: [AuthGuardService]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
