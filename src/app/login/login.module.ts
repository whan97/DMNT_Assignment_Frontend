import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIcon, MatIconModule} from '@angular/material/icon';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginFormComponent,
    DisplayUsersComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
