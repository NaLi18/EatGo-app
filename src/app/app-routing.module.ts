import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EatGoComponent } from './eat-go/eat-go.component';

const routes: Routes = [
  {path:'eatgo',component:EatGoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
