// 04 Using pipes
/*import { Injectable } from '@angular/core';

import { RaceModel } from './models/race.model';

@Injectable()
export class RaceService {

  constructor() { }

  list(): Array<RaceModel> {
    return [
      { name: 'Tokyo' },
      { name: 'Paris' },
      { name: 'Los Angeles'},
      { name: 'Sydney'},
      { name: 'Lyon'}
    ];
  }
}
*/

// 05 Observables with RxJS
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RaceModel } from './models/race.model';

@Injectable()
export class RaceService {

  constructor() {}

  list(): Observable<Array<RaceModel>> {
    return Observable.of([
      { name: 'Lyon' },
      { name: 'Los Angeles' },
      { name: 'Sydney' },
      { name: 'Tokyo' },
      { name: 'Casablanca' }
    ]);
  }

}
