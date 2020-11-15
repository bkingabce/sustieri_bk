import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EcologicalFpPage } from './ecological-footprint';
import { EcologicalFpPageRoutingModule } from './ecological-footprint-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcologicalFpPageRoutingModule
  ],
  declarations: [
    EcologicalFpPage,
  ]
})
export class EcologicalFpModule { }
