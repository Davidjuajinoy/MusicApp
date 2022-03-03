import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { trackModel, Duration } from '../../../core/models/track.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  /* 
  *subject es un observer(escucha el flujo de datos) y un observable(flujo de datos), necesita que primero se suscriban a el para iniciar.(flujo de datos) y luego si enviarle la informacion por medio de next(info)
  ? public trackInfo$: Subject<any> = new Subject(); //no se puede iniciarlizar al crear
  this.trackInfo$.next('xd');

  *BehaviorSubject es igual al subject pero
  !se puede inicializar al declararlo.
  ? public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  */

  public audio: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00-00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('00-00');

  constructor() {

    this.audio = new Audio();
    this.trackInfo$.subscribe({
      next: (track) => {
        if (!track) {
          return;
        }
        this.setAudio(track);
      },
      error: (e) => console.log('e')

    })

    this.listenAllEvents();

  }


  setAudio(track: trackModel) {
    this.audio.src = track.url;
    this.audio.play()
  }

  private listenAllEvents(): void {

    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)

  }


  private calculateTime= () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setRemaining(currentTime, duration);
    this.setPercentage(currentTime, duration);
  }

    private setPercentage(currentTime: number, duration: number): void {

      let percentage = (currentTime * 100) / duration;
      this.playerPercentage$.next(percentage);
    }

    private setRemaining(currentTime: number, duration: number): void {

      let time = duration - currentTime;
      let seconds = Math.floor(time % 60);
      let minutes = Math.floor((time / 60) % 60);
      const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
      const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
      const displayFormat = `-${displayMinutes}:${displaySeconds}`
      this.timeRemaining$.next(displayFormat);
    }

    private setTimeElapsed(currentTime: number): void {
      let seconds = Math.floor(currentTime % 60);
      let minutes = Math.floor((currentTime / 60) % 60);
      const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
      const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
      const displayFormat = `${displayMinutes}:${displaySeconds}`
      this.timeElapsed$.next(displayFormat);
    }


  // Agregarles los estados al playerStatus$.next
  public setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play')
        break;
      case 'playing':
        this.playerStatus$.next('play')
        break;
      case 'ended':
        this.playerStatus$.next('play')
        break;
      default:
        this.playerStatus$.next('paused')
        break;
    }
  }


  public seekAudio(percentage : number) :void{
    const{ duration} = this.audio;
    const percentageToSecond = (percentage * duration) /100;
    this.audio.currentTime = percentageToSecond;
  }

  public togglePlayer(): void {

    if (this.trackInfo$.getValue() == undefined) {
      return
    }
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public toggleMuted():boolean{
    console.log(this.audio.muted);
    
    (this.audio.muted == false) ? this.audio.muted=true : this.audio.muted=false;
    return this.audio.muted;
  }
}
