import {TestBed} from '@angular/core/testing';
import {OfferHelpStateService} from './offerhelp-state.service';

describe('OfferHelpStateService', () => {
  let service: OfferHelpStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferHelpStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
