import { Component, OnInit } from '@angular/core';
import { Country } from '../Model/Country';

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.css']
})
export class CountryComponentComponent implements OnInit {

  /* Text Size*/
  size = 20;
  constructor() { }
  countries : Country[] = [
    {
      id : 1,
      name : 'INDIA',
      description : 'India is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. '
    },
    {
      id : 2,
      name : 'JAPAN',
      description : 'Japan is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches'
    },
    {
      id : 3,
      name : 'US',
      description : 'The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean.'
    }
  ];

  /*
  * Change Color When Click On Button
  * */
  changeColor(tag){
    let giveColor = document.getElementById("table" );
    if(tag == "gray"){
      giveColor.style.color = 'lightgray';
    }
  }

  ngOnInit() {
  }

}
