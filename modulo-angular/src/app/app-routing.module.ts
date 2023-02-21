import { PaiComponent } from './empty-route/pai/pai.component';
import { FilhoComponent } from './empty-route/filho/filho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PaiComponent
  },
  {
    path: 'filho',
    component: FilhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
