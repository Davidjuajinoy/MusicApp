import { Component, Input, OnInit } from '@angular/core';
import { trackModel } from '@core/models/track.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html'
})
export class CardPlayerComponent implements OnInit {

  @Input() track !: trackModel;
  @Input() mode!: 'big' | 'small';
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  SendTrack(track: trackModel) {
    this.multimediaService.trackInfo$.next(track);
  }

}
