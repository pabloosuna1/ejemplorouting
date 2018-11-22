import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactsComponent} from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    /*canActivate:[AuthGuard]*/
  },{
    path:"profile",
    component:ProfileComponent,
    /*canActivate:[AuthGuard]*/
  },{
    path:"contacts",
    component:ContactsComponent,
    /*canActivate:[AuthGuard]*/
  },{
    path:"login",
    component:LoginComponent
  },{
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
