import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { KlipyResponse } from "../interfaces/kiply.interfaces";
import { environment } from "@environments/environment.development";

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  loadTrendingGifs(): Observable<string[]> {
    return this.http.get<KlipyResponse>(environment.klipyUrl, {
      headers: {
        'X-KLIPY-API-KEY': environment.klipyApiKey
      }
    }).pipe(
      map(response =>
        response.data.data.map(item => item.file.md.gif.url)
      )
    );
  }
}
