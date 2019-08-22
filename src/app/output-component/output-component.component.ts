import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {

  @Input() PData: number;
  public previous;
  @Output() CDataEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(data){
    this.CDataEvent.emit(data);
  }

  ngOnChanges(changes: SimpleChanges){
    for (let property in changes){
      if(property === 'PData'){
        this.previous = changes[property].previousValue;
      }
    }
  }

}
