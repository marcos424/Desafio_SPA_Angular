import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { carroComponent } from './carro/carro.component';

const routes: Routes = [
{
  path: '',
  component: carroComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
