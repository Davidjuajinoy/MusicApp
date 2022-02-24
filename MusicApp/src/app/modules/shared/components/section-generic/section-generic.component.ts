import { Component, Input, OnInit } from '@angular/core';
import { trackModel } from '@core/models/track.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html'
})
export class SectionGenericComponent implements OnInit {

  @Input() title: string = ''
  @Input() mode: 'big'|'small' = 'big'
  @Input() dataTracks!: trackModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
