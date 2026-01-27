import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifList } from "../../components/gif-list/gif-list";


@Component({
  selector: 'app-gif-history-page',
  imports: [GifList],
  templateUrl: './gif-history-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryPage {

  gifService = inject(GifService)

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query']))
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query())
  })

}



