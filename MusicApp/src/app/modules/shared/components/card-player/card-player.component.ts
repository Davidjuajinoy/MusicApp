import { Component, Input, OnInit } from '@angular/core';
import { trackModel } from '@core/models/track.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html'
})
export class CardPlayerComponent implements OnInit {

  @Input() track: trackModel = {
    _id: 0, name: '', album: '', url: '', cover: '',
    artist: { name: '', nickname: '', nationality: '' },
    duration: { end: 0, start: 0 }
  };
  @Input() mode!: 'big' | 'small';
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  SendTrack(track: trackModel) {
    this.multimediaService.trackInfo$.next(track);
  }

}
