import { AfterViewInit, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OfferHelpStates, OfferHelpStateService } from './offerhelp-state.service';

@Component({
  selector: 'app-offerhelp-page',
  templateUrl: './offerhelp-page.component.html',
  styleUrls: ['./offerhelp-page.component.scss'],
})
export class OfferHelpPageComponent implements AfterViewInit{
  states = OfferHelpStates;
  readonly state: Observable<OfferHelpStates>;

  constructor( ) { }

  ngAfterViewInit(): void {
    //deleted with change to OfferHelp
  }

}
