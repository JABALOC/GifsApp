import { GifService } from './../../services/gifs.service';
import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',

})
export default class SearchPage {

  gifService = inject(GifService)
  gifs = signal<Gif[]>([]);



  onSearch(query: string) {
    this.gifService.searchGifs(query)
      .subscribe((resp) => {
        this.gifs.set(resp);
        
      });
  }

 }
