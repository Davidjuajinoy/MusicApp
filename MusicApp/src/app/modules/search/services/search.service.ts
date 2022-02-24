import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, map } from 'rxjs';
import { trackModel } from '@core/models/track.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL: string = `${environment.apiUrl}/tracks`;
  constructor(private http: HttpClient) { }

  searchTrack$($name: string): Observable<trackModel[]> {
    return this.http.get<trackModel[]>(`${this.URL}?search=${$name}`)
      .pipe(
        map((dataRaw: any) => dataRaw.data)
      );
  }
}
