import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandhanComponent } from './components/bandhan/bandhan.component';
import { TestComponent } from './components/test/test.component';

import {HttpClientModule} from '@angular/common/http';
import { BooksComponent } from './component/books/books.component';
import { CharactersComponent } from './component/characters/characters.component';
import { HousesComponent } from './component/houses/houses.component';

@NgModule({
  declarations: [
    AppComponent,
    BandhanComponent,
    TestComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
