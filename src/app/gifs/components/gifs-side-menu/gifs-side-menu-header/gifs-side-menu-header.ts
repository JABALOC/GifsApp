import { Component } from '@angular/core';
import { environment } from '@environments/environment.development';


@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.html',

})
export default class GifsSideMenuHeader {

  envs = environment
}
