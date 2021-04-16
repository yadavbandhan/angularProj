import { ObservableService } from './../../service/observable.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private bandhan1:ApiService, private obService: ObservableService) { }

  ngOnInit(): void {
    this.list1=this.bandhan1.getData();
    this.getdata()
  }

  name: string = ''
  displayname :string = ''
  setData(){
    this.obService.setdata(this.name);
  }

  getdata(){
    this.obService.getdata().subscribe((data) => {
      this.displayname = data
      console.log("data", data)
    })
  }

  list1:any;

}
