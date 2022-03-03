import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        FormBuilder
      ],
      declarations: [LoginPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Prueba
  /*  Formulario Invalido cuando ingrese datos errorneos
   */
  it('should return invalid form', () => {
    //  Arrange (inicializar obj)

    const mockCredencials = {
      email: 'davidlalalal',
      password: '124'
    }
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');
    //  Act (Realizar la llamada al metodo)
    emailForm?.setValue(mockCredencials.email);
    passwordForm?.setValue(mockCredencials.password);

    //  Assert (confirm/comprob)
    expect(component.formLogin.invalid).toEqual(true);

  })
  // Prueba
  /*  Formulario Valido 
   */
  it('should return valid form', () => {
    //  Arrange (inicializar obj)

    const mockCredencials = {
      email: 'david@gmail.com',
      password: '12345678'
    }
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');
    //  Act (Realizar la llamada al metodo)
    emailForm?.setValue(mockCredencials.email);
    passwordForm?.setValue(mockCredencials.password);

    //  Assert (confirm/comprob)
    expect(component.formLogin.valid).toEqual(true);

  })

  // Prueba
  /*  Boton
   */
  it('should have btn text "Ingresar"', () => {
    //  Arrange (inicializar obj)
    const element = fixture.debugElement.query(By.css('.form-login__submit button'));
    //  Act (Realizar la llamada al metodo)
    const textElement = element.nativeElement.textContent;
    //  Assert (confirm/comprob)
    expect(textElement).toEqual('Ingresar');

  })


});
