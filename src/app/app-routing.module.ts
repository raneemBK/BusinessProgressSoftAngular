import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: ()=>import('./bcard/bcard.module').then(x=>x.BcardModule)
  // }
  {
    path: '',
    loadChildren: ()=>import('./cards/cards.module').then(c => c.CardsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
