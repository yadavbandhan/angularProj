import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private books: ApiService) { }
  
  IceFire:any;
  ngOnInit(): void {
    this.books.getIce("books").subscribe((data)=>{
      this.IceFire = data;
  })

}

}
