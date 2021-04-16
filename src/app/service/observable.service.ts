import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }
  data :any =0;
  obser: Subject<any> = new Subject<any>();


  setdata(data:any){
    this.data = data;
    this.obser.next(this.data);
  }
  getdata(){
    return this.obser.asObservable();
  }
}
