import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  listObserves$: Subscription[] = [];
  state: string = 'paused';

  @ViewChild('progressBar') progressBar : ElementRef = new ElementRef('');

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
    /* Me suscribo al playerStatus$ para obtener el resultado que tiene */
    const observer1$ = this.multimediaService.playerStatus$.subscribe(
      status => {
        this.state = status
        console.log(status);
      });

    this.listObserves$ = [observer1$];
  }

  handlePosition(event:MouseEvent){
    const elNative : HTMLElement = this.progressBar.nativeElement;
    const {clientX} = event;
    const {x , width} = elNative.getBoundingClientRect();
    const clickX = clientX;
    const percentageFromX= (clickX * 100) / width;
    // console.log);
    this.multimediaService.seekAudio(percentageFromX);
    console.log(event);
    
    
  } 

  ngOnDestroy(): void {
    this.listObserves$.forEach((o) => {
      o.unsubscribe();
    })
  }

}  
