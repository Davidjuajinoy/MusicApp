import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ['']
})
export class SearchComponent implements OnInit {

  @Output() callbackData: EventEmitter<any> = new EventEmitter(); 
  search:string=''; 
  constructor() { }

  ngOnInit(): void {
  }


  callSearch(search:string):void{
    if (search.length <= 3) {
      return 
    }    
    this.callbackData.emit(search);
  }

}
