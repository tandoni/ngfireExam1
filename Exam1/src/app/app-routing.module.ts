import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './+list/list.component';
import { SigninComponent } from './+signin/signin.component';
import { RandomComponent } from './+random/random.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list'},
  { path: 'list', component: ListComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'random/:value', component: RandomComponent},
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
