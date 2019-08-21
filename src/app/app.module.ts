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

@NgModule({
  declarations: [
    AppComponent,
    CountryComponentComponent,
    StateComponentComponent,
    HeaderComponenetsComponent,
    CityComponenetComponent,
    InputComponentComponent,
    OutputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
