import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { KiplyResponse, type KlipyResponse } from "../interfaces/kiply.interface";
import { environment } from "@environments/environment.development";
import { GifMapper } from "../mapper/gifs.mapper";
import { Gif } from "../interfaces/gif.interface";


@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);





  constructor() {
    this.loadTrendingGifs();

  }

  loadTrendingGifs() {

    this.http.get<KlipyResponse>(environment.klipyUrl, {

    }).subscribe((resp) => {
      const gifs = GifMapper.mapKlipyItemToArray(resp.data.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log(gifs);
    })

  }
  searchGifs(query: string) {

    this.http.get<KlipyResponse>(environment.klipyUrl, {
      params: {
        q: query,
      }

    }).subscribe((resp) => {
      const gifs = GifMapper.mapKlipyItemToArray(resp.data.data);

      console.log({ search: gifs });
    })



  }
}


