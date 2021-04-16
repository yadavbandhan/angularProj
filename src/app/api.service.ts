import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return ['Bandhan', 'Suchir', 'Deepank', 'Tanmay', 'Himashu'];
  }
  
  public getIce(content:string){
    return this.httpClient.get('https://anapioficeandfire.com/api'+'/'+content)
  }
}
