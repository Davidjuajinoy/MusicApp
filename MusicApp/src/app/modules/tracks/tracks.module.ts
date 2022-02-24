import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './Pages/tracks-page/tracks-page.component';
import { SharedModule } from '@modules/shared/shared.module';


@NgModule({
  declarations: [
    TracksPageComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule,
    SharedModule
  ]
})
export class TracksModule { }
