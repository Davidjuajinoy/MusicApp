import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy };
  // genera un mock de una htpp

  let mockUser: any = ({
    userFail: {
      email: "davidlal@",
      password: "_d"
    },
    userOk: {
      email: "david@test.com",
      password: "123456789"
    }
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);// se le dice que tiene que imitar
    service = new AuthService(httpClientSpy as any); // se crea la instancia con el servicio requerido
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ? Prueba sendCredential
  /* Debe retornar un objeto con data y tokenSession */
  it('should return an object with data and tokenSession', (done: DoneFn) => {
    // Arrange
    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: 'x84x'
    }
  /* Se simula la respuesta */
    httpClientSpy.post.and.returnValue(
      of(mockResponse)
    );

    //ACT
    service.sendCredentials(user.email,user.password).subscribe((resp) =>{
      const getProperties = Object.keys(resp);
      expect(getProperties).toContain('data');
      expect(getProperties).toContain('tokenSession');
      done();
    })

  });
});
