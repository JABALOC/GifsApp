import { Component } from '@angular/core';
import GifsSideMenuOptions from '../gifs-side-menu-options/gifs-side-menu-options';
import GifsSideMenuHeader from '../gifs-side-menu-header/gifs-side-menu-header';

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuOptions, GifsSideMenuHeader, ],
  templateUrl: './gifs-side-menu.html',

})
export class GifsSideMenu { }
