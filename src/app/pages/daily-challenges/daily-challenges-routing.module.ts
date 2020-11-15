import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DailyChPage } from './daily-challenges';

const routes: Routes = [
  {
    path: '',
    component: DailyChPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyChPageRoutingModule { }
