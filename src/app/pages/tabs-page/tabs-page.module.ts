import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { DailyChModule } from '../daily-challenges/daily-challenges.module';
import { CategoryListModule } from '../category-list/category-list.module';
import { EcologicalFpModule } from '../ecological-footprint/ecological-footprint.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    TabsPageRoutingModule,
    DailyChModule,
    CategoryListModule,
    EcologicalFpModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
