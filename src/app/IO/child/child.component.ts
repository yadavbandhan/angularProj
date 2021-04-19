import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.sendData.emit("Child")
  }
  
  // name:any="";
  // @Input() Data:any;

  @Output() public sendData = new EventEmitter<string>(); 
  

}
