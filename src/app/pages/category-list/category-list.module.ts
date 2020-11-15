import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoryListPage } from './category-list';
import { CategoryListPageRoutingModule } from './category-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CategoryListPageRoutingModule
  ],
  declarations: [
    CategoryListPage,
  ]
})
export class CategoryListModule{}
