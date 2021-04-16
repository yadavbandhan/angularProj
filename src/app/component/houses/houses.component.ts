import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(private houses:ApiService) { }
  IceFire:any;
  ngOnInit(): void {
    this.houses.getIce("houses").subscribe((data)=>{
      this.IceFire = data;
  })
  }

}
