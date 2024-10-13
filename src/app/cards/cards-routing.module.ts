import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BusnissComponent } from './busniss/busniss.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'busniss',
    component: BusnissComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
