/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RipperService } from './ripper.service';

describe('RipperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RipperService]
    });
  });

  it('should ...', inject([RipperService], (service: RipperService) => {
    expect(service).toBeTruthy();
  }));
});
