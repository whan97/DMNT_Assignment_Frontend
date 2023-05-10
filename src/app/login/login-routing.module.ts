import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent },
  {path: 'users/display', component: DisplayUsersComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
