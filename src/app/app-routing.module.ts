import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponentComponent } from "./country-component/country-component.component";
import {StateComponentComponent} from "./state-component/state-component.component";
import {CityComponenetComponent} from "./city-componenet/city-componenet.component";
import {HeaderComponenetsComponent} from "./header-componenets/header-componenets.component";


const routes: Routes = [
    /*Parameter Routing*/
  { path: 'country/:id', component: CountryComponentComponent },
  { path: 'state', component: StateComponentComponent },
  { path: 'city', component: CityComponenetComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
