import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LzyModOneRoutingModule } from './lzy-mod-one-routing.module';
import { LzyModOneComponent } from './lzy-mod-one.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LzyModOneComponent
  ],
  imports: [
    CommonModule,
    LzyModOneRoutingModule,
    SharedModule
  ]
})
export class LzyModOneModule { }
