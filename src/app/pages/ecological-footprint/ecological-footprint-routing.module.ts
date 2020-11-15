import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EcologicalFpPage } from './ecological-footprint';

const routes: Routes = [
  {
    path: '',
    component: EcologicalFpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcologicalFpPageRoutingModule { }
