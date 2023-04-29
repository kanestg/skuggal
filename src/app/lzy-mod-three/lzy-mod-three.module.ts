import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LzyModThreeRoutingModule } from './lzy-mod-three-routing.module';
import { LzyModThreeComponent } from './lzy-mod-three.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LzyModThreeComponent
  ],
  imports: [
    CommonModule,
    LzyModThreeRoutingModule,
    SharedModule
  ]
})
export class LzyModThreeModule { }
