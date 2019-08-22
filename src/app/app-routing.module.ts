import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponentComponent } from "./country-component/country-component.component";
import {StateComponentComponent} from "./state-component/state-component.component";
import {CityComponenetComponent} from "./city-componenet/city-componenet.component";
import {HeaderComponenetsComponent} from "./header-componenets/header-componenets.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from './auth/login/login.component'
import {InputComponentComponent} from "./input-component/input-component.component";

const routes: Routes = [
    /*Parameter Routing*/
  { path: 'country/:id', component: CountryComponentComponent, canActivate:[AuthGuard] },
  { path: 'state', component: StateComponentComponent, canActivate: [AuthGuard] },
  { path: 'city', component: CityComponenetComponent, canActivate: [AuthGuard] },
  { path: 'parent-child', component: InputComponentComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: HeaderComponenetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
