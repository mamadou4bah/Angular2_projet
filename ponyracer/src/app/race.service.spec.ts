// 04 Using pipes
/*import { TestBed, inject } from '@angular/core/testing';

import { RaceService } from './race.service';

describe('RaceService', () => {

  let services: RaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaceService]
    });
  });

  beforeEach(() => services = TestBed.get(RaceService));

  it('should be created', inject([RaceService], (service: RaceService) => {
    expect(service).toBeTruthy();
  }));

  it('should list races', () => {
    const races = services.list();
    expect(races.length).toBe(5, 'The service should return two races for the `list()` method');
  });
});*/


// 05 Observables with RxJS
import { async, TestBed } from '@angular/core/testing';

import { RaceService } from './race.service';
import { RaceModel } from './models/race.model';

describe('RaceService', () => {

  let service: RaceService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RaceService]
  }));

  beforeEach(() => service = TestBed.get(RaceService));

  it('should list races', async(() => {
    const observable = service.list();
    observable.subscribe((races: Array<RaceModel>) => {
      expect(races.length).toBe(5, 'The service should return five races in an Observable for the `list()` method');
    });
  }));

});
