import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gif.service';

const arrayImages: string[] = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
];

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trendingPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPage {
  readonly gifService = inject(GifService);

  imagesSignal = computed(() => {
    return this.gifService.trendingGifs();
  });
 }
