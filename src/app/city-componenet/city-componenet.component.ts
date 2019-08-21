import {Component, OnInit, Input} from '@angular/core';
import { City } from '../Model/City';
@Component({
  selector: 'app-city-componenet',
  templateUrl: './city-componenet.component.html',
  styleUrls: ['./city-componenet.component.css']
})
export class CityComponenetComponent implements OnInit {

  constructor() { }
  cities : City[] = [
    {
      id : 1,
      name : 'Ahmedabad',
      description : 'Ahmedabad, in western India, is the largest city in the state of Gujarat. The Sabarmati River runs through its center.'
    },
    {
      id : 2,
      name : 'Morbi',
      description : 'Morbi or Morvi is a town and a municipality in Morbi district in the Indian state of Gujarat. It is situated on the Kathiawar peninsula.'
    }
  ];

  ngOnInit() {
  }

}
