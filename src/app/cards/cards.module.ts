import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { BusnissComponent } from './busniss/busniss.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    BusnissComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule,
    FormsModule,
    
  ]
})
export class CardsModule { }
