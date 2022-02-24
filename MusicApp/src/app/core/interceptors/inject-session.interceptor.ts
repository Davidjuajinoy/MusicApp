import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }
  /* 
  * Inyectar propiedades en las peticiones HTTP
    *se necesita incluir en appmodules en Providers
  */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this.cookieService.check('token');
      let newRequest = request;
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
      return next.handle(newRequest);
    } catch (error) {
      console.log('Algo Paso', error);
      return next.handle(request);
    }
  }
}
