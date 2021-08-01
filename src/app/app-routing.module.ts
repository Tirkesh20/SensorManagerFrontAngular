import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SensorComponent} from "./sensor/sensor.component";
//This is my case
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'table',
    component:SensorComponent
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
