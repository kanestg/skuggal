import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LzyModTwoComponent } from './lzy-mod-two.component';

const routes: Routes = [{ path: '', component: LzyModTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LzyModTwoRoutingModule { }
