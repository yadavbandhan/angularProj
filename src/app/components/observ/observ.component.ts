import { ObservableService } from './../../service/observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit {

  constructor(private testObserv: ObservableService) { }

  ngOnInit(): void {
    this.getData();
  }

  list1=["bandhan","suchir","tanmay","deepu"];

  getData(){
    this.testObserv.getdata().subscribe((data)=>{
      this.list1.push(data);
    })
  }
}
