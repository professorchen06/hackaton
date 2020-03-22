import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferHelpPageComponent} from './offerhelp-page/offerhelp-page.component';

const routes: Routes = [
  {
    path: '',
    component: OfferHelpPageComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferHelpAreaRoutingModule {
}
