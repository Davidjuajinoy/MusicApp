import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private authService: AuthService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {

    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],

    })
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password).subscribe(
      {
        next:
          resp => {
            const { tokenSession, data } = resp;
            this.cookieService.set('token', tokenSession, 4, '/');
            this.router.navigate(['/', 'tracks']);

          },
        error: err => {
          this.errorSession = true
          console.log('Ocurrio un error con tu email o password');
        }
      }
    );
  }
}
