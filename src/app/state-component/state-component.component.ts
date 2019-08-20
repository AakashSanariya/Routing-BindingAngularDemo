import { Component, OnInit } from '@angular/core';
import { State } from '../Model/State';

@Component({
  selector: 'app-state-component',
  templateUrl: './state-component.component.html',
  styleUrls: ['./state-component.component.css']
})
export class StateComponentComponent implements OnInit {

  constructor() { }
  states : State[] = [
    {
      id : 1,
      name : 'Gujarat',
      description : 'Gujarat, India\'s westernmost state, has varied terrain and numerous sacred sites. In its urban center of Ahmedabad is the Calico Museum of Textiles,'
    },
    {
      id : 2,
      name : 'Maharastra',
      description : 'Maharashtra, a state spanning west-central India, is best known for its fast-paced capital, Mumbai (formerly Bombay). This sprawling metropolis is the seat of the Bollywood film industry.'
    }
  ];
  ngOnInit() {
  }
}
