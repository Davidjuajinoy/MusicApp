import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() CustomImg: string | boolean = false;
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement;
    console.log('IMG EVENTO',this.elHost);
    if (this.CustomImg) {
      elNative.src = this.CustomImg;
    }else{
      elNative.src ='/assets/img/img-broken.svg';
    }
    
  }
  constructor(private elHost: ElementRef) { }

}
