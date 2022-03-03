import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { RouterModule } from '@angular/router';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { OrderListPipe } from './pipes/order-list.pipe';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SidebarComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    OrderListPipe,
    PlayListHeaderComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    MediaPlayerComponent,
    PlayListBodyComponent,
    OrderListPipe,
    PlayListHeaderComponent
  ]
})
export class SharedModule { }
