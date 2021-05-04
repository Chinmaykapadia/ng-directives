import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponentComponent } from '../app/new-component/new-component.component';
const routes: Routes = [{
  path:'new-component',
  component:NewComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
