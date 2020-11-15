import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DailyChPage } from './daily-challenges';
import { DailyChPageRoutingModule } from './daily-challenges-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyChPageRoutingModule
  ],
  declarations: [
    DailyChPage,
  ]
})
export class DailyChModule { }
