import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderAreaRoutingModule} from './order-area-routing.module';
import {OrderPageComponent} from './order-page/order-page.component';


@NgModule({
  imports: [
    OrderAreaRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [OrderPageComponent],
})
export class OrderAreaModule {
}
