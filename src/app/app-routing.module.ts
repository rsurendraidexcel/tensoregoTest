import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TensorGoComponent } from './tensor-go/tensor-go.component';

const routes: Routes = [
  {path: '', component: TensorGoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
