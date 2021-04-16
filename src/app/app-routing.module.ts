import { HousesComponent } from './component/houses/houses.component';
import { CharactersComponent } from './component/characters/characters.component';
import { BooksComponent } from './component/books/books.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'books',
   component:BooksComponent},
  {path:'characters',
   component:CharactersComponent},
  {path:'houses',
  component:HousesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
