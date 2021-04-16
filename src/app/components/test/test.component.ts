import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private bandhan1:ApiService) { }

  ngOnInit(): void {
    this.list1=this.bandhan1.getData();
  }

  list1:any;

}
