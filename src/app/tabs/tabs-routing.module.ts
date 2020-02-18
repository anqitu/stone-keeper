import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'gallery',
        children: [
          {
            path: '',
            loadChildren: '../gallery/gallery.module#GalleryPageModule'
          }
        ]
      },
      {
        path: 'upload',
        children: [
          {
            path: '',
            loadChildren: '../upload/upload.module#UploadPageModule'
          }
        ]
      },
      {
        path: 'collections',
        children: [
          {
            path: '',
            loadChildren: '../collections/collections.module#CollectionsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/gallery',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/gallery',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
