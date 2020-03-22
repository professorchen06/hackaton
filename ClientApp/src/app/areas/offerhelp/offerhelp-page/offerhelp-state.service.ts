import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {startWith} from 'rxjs/operators';

export enum OfferHelpStates {
  Unknown = 1,
  ProductSelection,
  Overview,
  Complete,
}

@Injectable({
  providedIn: 'root',
})
export class OfferHelpStateService {
  private readonly currentState = new Subject<OfferHelpStates>();

  constructor() {
  }

  observable(): Observable<OfferHelpStates> {
    return this.currentState.pipe(
      startWith(OfferHelpStates.Unknown),
    );
  }

  startProductSelection() {
    this.currentState.next(OfferHelpStates.ProductSelection);
  }

  startCheckout() {
    this.currentState.next(OfferHelpStates.Overview);
  }

  completeOfferHelp() {
    this.currentState.next(OfferHelpStates.Complete);
  }
}
