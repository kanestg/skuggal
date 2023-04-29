import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LzyModOneComponent } from './lzy-mod-one.component';

const routes: Routes = [{ path: '', component: LzyModOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LzyModOneRoutingModule { }
