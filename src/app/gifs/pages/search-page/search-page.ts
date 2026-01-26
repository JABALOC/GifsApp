import { GifService } from './../../services/gifs.service';
import { Component, inject, output } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',

})
export default class SearchPage {

  gifService = inject(GifService)




  onSearch(query: string) {
    this.gifService.searchGifs(query);
  }

 }
