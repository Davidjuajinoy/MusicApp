import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl:'./search-page.component.html',
  styles: [``],
})
export class SearchPageComponent implements OnInit {

  listResults$: Observable<any> = of([]);
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event:any):void{
    console.log(event);
    
    this.listResults$ = this.searchService.searchTrack$(event);
    console.log(event);
    
  }

}
