import {Component, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  /*Child Data*/
  public CData: string;

  constructor() { }

  ngOnInit() {
  }
}
