import { Component, OnInit } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage implements OnInit {

  imageUrls: string[] = [];

  constructor(private gifService: GifService) {}

  ngOnInit(): void {
    this.gifService.loadTrendingGifs().subscribe(urls => {
      this.imageUrls = urls;
    });
  }
}
