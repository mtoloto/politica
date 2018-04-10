import { NgModule } from '@angular/core'; 

import { ParlamentModalComponent } from './parlament-modal';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ParlamentModalComponent,
  ],
  imports: [
    IonicPageModule.forChild(ParlamentModalComponent),
  ],
  entryComponents: [
    ParlamentModalComponent,
  ]
})
export class ParlamentModalModule { }