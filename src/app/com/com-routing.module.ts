import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [

  { path: "search", component: SearchComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComRoutingModule { }
