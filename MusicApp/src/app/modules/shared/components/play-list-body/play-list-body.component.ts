import { Component, Input, OnInit } from '@angular/core';
import { trackModel } from '@core/models/track.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styles: [
  ]
})
export class PlayListBodyComponent implements OnInit {

  @Input() tracks: trackModel[] = [];
  optionSort: { property: string | null, order: string } = {
    property: null, order: 'asc'
  };


  constructor() { }

  ngOnInit(): void {
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: (order === 'asc') ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
    
  }

}
