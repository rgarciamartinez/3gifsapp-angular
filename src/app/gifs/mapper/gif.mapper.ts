import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interface';

export class GifMapper {
  static giphyItemToGifItem(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static giphyMapToGiphyItem(item: GiphyItem[]): Gif[] {
    return item.map(this.giphyItemToGifItem);
  }
}
