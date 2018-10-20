import { Injectable } from '@angular/core';
import { SeriesModel } from '../series-model';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  getAllSeries(): SeriesModel[] {
    const series: SeriesModel[] = [
      {
        title : 'Castle',
        img : 'http://www.toramp.com/pic/scheldule/Castle_2012.jpg',
        mark : 4,
        // tslint:disable-next-line:max-line-length
        desc : 'After a serial killer imitates the plots of his novels, successful mystery novelist Richard "Rick" Castle receives permission from the Mayor of New York City to tag along with an NYPD homicide investigation team for research purposes.'
      },
      {
        title : 'Castle',
        // tslint:disable-next-line:max-line-length
        desc : 'After a serial killer imitates the plots of his novels, successful mystery novelist Richard "Rick" Castle receives permission from the Mayor of New York City to tag along with an NYPD homicide investigation team for research purposes.',
        mark : 5,
        img : 'http://www.toramp.com/pic/scheldule/Castle_2012.jpg'
      }
    ];
    return series;
  }
}
