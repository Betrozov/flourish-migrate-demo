import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'view2', pathMatch: 'full'},
  {path: 'view1', loadChildren: './view1-lazy/view1-lazy.module#View1LazyModule'},
  {path: 'view2', loadChildren: './view2-lazy/view2-lazy.module#View2LazyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
