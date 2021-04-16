import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-bandhan',
  templateUrl: './bandhan.component.html',
  styleUrls: ['./bandhan.component.css']
})
export class BandhanComponent implements OnInit {

  constructor(private bandhan: ApiService) { }
  name:string="bandhan";

  ngOnInit(): void {
    this.listOfStudents=this.bandhan.getData();
    this.bandhan.getIce("books").subscribe((data)=>{
      this.IceFire = data;
    });
  }

  listOfStudents: any = [];
  IceFire:any;
  

  sh=true;


  show(event:any) {
    console.log(event)
  }

  showIce(){
    console.log(this.IceFire);
  }
}
