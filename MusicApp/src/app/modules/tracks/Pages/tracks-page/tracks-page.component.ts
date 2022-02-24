import { Component, OnInit } from '@angular/core';
import { trackModel } from '@core/models/track.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html'
})
export class TracksPageComponent implements OnInit {

  tracksTrending: trackModel[] = [];

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {

    this.trackService.getTracksAll$().subscribe((data) => {
      this.tracksTrending = data;
      console.log(data);
      
    }
    );
  }

}
