import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  constructor() {
    this.getTrendingGifs();
  }

  readonly env = environment;
  readonly http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  searchedGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);
  searchedGifsLoading = signal<boolean>(true);

  getTrendingGifs = () => {
    this.http
      .get<GiphyResponse>(`${this.env.giphyUrl}/gifs/trending`, {
        params: {
          api_key: this.env.giphyApiKey,
          limit: 20,
          offset: 0,
          rating: 'g',
        },
      })
      .pipe(
        map((response: GiphyResponse) =>
          GifMapper.giphyMapToGiphyItem(response.data)
        )
      )
      .subscribe((resp: Gif[]) => {
        this.trendingGifs.set(resp);
        this.trendingGifsLoading.set(false);
      });
  };

  searchGifs = (query: string) => {
    this.http
      .get<GiphyResponse>(`${this.env.giphyUrl}/gifs/search`, {
        params: {
          api_key: this.env.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      // .pipe(
      //   map((response: GiphyResponse) =>
      //     GifMapper.giphyMapToGiphyItem(response.data)
      //   )
      // )
      .subscribe((resp: any) => {
        return resp.data;
      });
  };
}

