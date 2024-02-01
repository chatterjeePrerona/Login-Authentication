import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandPageComponent } from './land-page/land-page.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';

const routes: Routes = [

  { path: 'land-page', component: LandPageComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'login-success', component: LoginSuccessfulComponent },

  // redirect to home in case of blank URL selector
  { path: '', redirectTo: 'land-page', pathMatch: 'full' },

  // in case of wrong URL
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
