import { Component, input } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItem, CommonModule],
  templateUrl: './gif-list.html',
})
export class GifList {

  gift = input.required<string[]>();
  // input string[];

}
