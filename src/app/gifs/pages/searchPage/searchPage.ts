import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './searchPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPage {
  gifService = inject(GifService);
  async search(input: string) {
    const resp = this.gifService.searchGifs(input);
    console.log(resp);
  }
 }
