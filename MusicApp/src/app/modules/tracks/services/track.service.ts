import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, pipe } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { trackModel } from '@core/models/track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL: string = `${environment.apiUrl}/tracks`
  constructor(private http: HttpClient) { }


  getTracksAll$(): Observable<trackModel[]> {
    return this.http.get<trackModel[]>(this.URL)
      .pipe(
        map(({ data }: any) => {
          return data;
        }),
        catchError((err) => {
          const { status, statusText } = err;
          console.log(`Algo paso: ${status} ${statusText}`);

          return of([]);
        })

      )
  }

}
