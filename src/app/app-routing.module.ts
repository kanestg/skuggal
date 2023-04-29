import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  { path: '', redirectTo: '/lzy-mod-one', pathMatch: 'full' },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'lzy-mod-one', loadChildren: () => import('./lzy-mod-one/lzy-mod-one.module').then(m => m.LzyModOneModule) },
  { path: 'lzy-mod-two', loadChildren: () => import('./lzy-mod-two/lzy-mod-two.module').then(m => m.LzyModTwoModule) },
  { path: 'lzy-mod-three', loadChildren: () => import('./lzy-mod-three/lzy-mod-three.module').then(m => m.LzyModThreeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
