import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characters:ApiService) { }

  IceFire:any;
  ngOnInit(): void {
    this.characters.getIce("characters").subscribe((data)=>{
      this.IceFire=data;
    })
  }

}
