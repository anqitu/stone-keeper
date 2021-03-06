import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { CollectionsPageRoutingModule } from './collections-routing.module';
import { CollectionsPage } from './collections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionsPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [CollectionsPage]
})
export class CollectionsPageModule {}
