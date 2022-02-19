import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './Pages/tracks-page/tracks-page.component';


@NgModule({
  declarations: [
    TracksPageComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule
  ]
})
export class TracksModule { }
