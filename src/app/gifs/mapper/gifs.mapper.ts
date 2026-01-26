import { Gif } from '../interfaces/gif.interface';
export class GifMapper {

  static mapKlipyItemToGif( item: {id: number; title: string; file: {md: {gif: {url: string}}}}): Gif {
   const url = item.file.md.gif.url;
    return {
      id: item.id,
      title: item.title,
      url: url,
    }

  }
  static mapKlipyItemToArray( item: {id: number; title: string; file: {md: {gif: {url: string}}}}[]): Gif[] {
    return item.map(this.mapKlipyItemToGif);
  }
}

