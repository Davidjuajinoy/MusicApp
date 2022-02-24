import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './components/search/search.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SharedModule } from '@modules/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SearchModule { }
