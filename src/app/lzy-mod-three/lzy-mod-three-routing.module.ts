import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LzyModThreeComponent } from './lzy-mod-three.component';

const routes: Routes = [{ path: '', component: LzyModThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LzyModThreeRoutingModule { }
