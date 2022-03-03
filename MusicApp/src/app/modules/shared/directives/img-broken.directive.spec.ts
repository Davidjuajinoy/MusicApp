import { ElementRef, Directive, Component } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Para probar una directiva necesitamos un Componente
@Component({
  template: `<img appImgBroken [src]="srcMock" >`
})
class TestComponent {
  public srcMock: any = null;
}

describe('ImgBrokenDirective', () => {

  /* Declarar componente */
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ImgBrokenDirective]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /* End Declarar componente */



  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

/* //?Instance TestComponent  */
  it('should instance testComponent correctly', () => {
    expect(component).toBeTruthy();
  });

  it('should change img for a logo', (done:DoneFn) => {
    // ARRANGE
    const beforeimgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    const beforeimgSrc = beforeimgElement.src;
    component.srcMock = undefined;

    setTimeout(() => {
      const afterimgElement = fixture.debugElement.query(By.css('img')).nativeElement;
      const afterimgSrc = afterimgElement.src;
      expect(afterimgSrc).toMatch(/\bimg-broken.svg\b/);       
      done()
    }, 3000);
    
  });
  
  



});
