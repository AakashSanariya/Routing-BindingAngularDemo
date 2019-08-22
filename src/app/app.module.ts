import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponentComponent } from './country-component/country-component.component';
import { StateComponentComponent } from './state-component/state-component.component';
import { HeaderComponenetsComponent } from './header-componenets/header-componenets.component';
import { CityComponenetComponent } from './city-componenet/city-componenet.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { OutputComponentComponent } from './output-component/output-component.component';
import { LoginComponent } from './auth/login/login.component';
import {AuthService} from "./auth/auth.service";
import {CanActivate} from "@angular/router/router";
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    CountryComponentComponent,
    StateComponentComponent,
    HeaderComponenetsComponent,
    CityComponenetComponent,
    InputComponentComponent,
    OutputComponentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
