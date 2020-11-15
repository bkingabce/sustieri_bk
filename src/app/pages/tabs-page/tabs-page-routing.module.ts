import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
      path: 'daily-challenges',
        children:[
          {
            path: '',
            loadChildren: () => import('../daily-challenges/daily-challenges.module').then(m => m.DailyChModule)
          },
          {
            path: 'categories',
            loadChildren: () => import ('../category-list/category-list.module').then(m => m.CategoryListModule)
          }
        ]
      },
      {
      path: 'ecological-footprint',
      children: [
        {
          path: '',
          loadChildren: () => import('../ecological-footprint/ecological-footprint.module').then(m => m.EcologicalFpModule)
        }
      ]
    }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

