import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LzyModTwoRoutingModule } from './lzy-mod-two-routing.module';
import { LzyModTwoComponent } from './lzy-mod-two.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LzyModTwoComponent
  ],
  imports: [
    CommonModule,
    LzyModTwoRoutingModule,
    SharedModule
  ]
})
export class LzyModTwoModule { }
