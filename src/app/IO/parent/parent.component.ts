import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // enterName="";
  // parentData="";
  
  // TransferData(){
  //   this.parentData=this.enterName;
  // }

  value:any ="";

  sendData(value: any){
    this.value=value;
  }
LOG(event:any){
  console.log("event",event)
}
}
