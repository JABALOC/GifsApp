import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { type KlipyResponse } from "../interfaces/kiply.interface";
import { environment } from "@environments/environment.development";
import { GifMapper } from "../mapper/gifs.mapper";
import { Gif } from "../interfaces/gif.interface";
import { map, tap } from "rxjs";


const loadFromLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
    const gifs = JSON.parse(gifsFromLocalStorage);
    return gifs;
};


@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>( loadFromLocalStorage() ); // Objeto para guardar en localStorage
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));




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

    return this.http.get<KlipyResponse>(environment.klipyUrl, {
      params: {
        q: query,
      }

    }).pipe(
      map(({ data }) => data.data),
      map((items) => GifMapper.mapKlipyItemToArray(items)),

      // Historial
      tap((items) => {
        this.searchHistory.update((history) => ({
          ...history,
          [query.toLowerCase()]: items,
        }))
      }),
    )
  }


  // saveLocalStorage = effect(() => {
  //   localStorage.setItem(
  //     'key',
  //     JSON.stringify(this.searchHistory())
  //   )
  // })

  // loadFromLocalStorage = (): Gif[] => {
  //   const gifs = localStorage.getItem('key');
  //   return gifs ? JSON.parse(gifs): [];
  // };

  // historyGifs = signal<Gif[]>(loadFromLocalStorage());

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory())
    localStorage.setItem('gifs', historyString);
  })




  getHistoryGifs(query: string) {
      return this.searchHistory()[query] ?? [];
  }
}


