import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {

  @Input() PData: number;
  @Output() CDataEvent = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  onChange(data){
    this.CDataEvent.emit(data);
  }
}
