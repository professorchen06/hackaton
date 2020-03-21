import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderAreaRoutingModule } from './order-area-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderFormComponent } from './order-page/order-form/order-form.component';
import { ConfirmOrderModalContentComponent } from './confirm-order-modal-content/confirm-order-modal-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    OrderAreaRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [OrderPageComponent, OrderFormComponent, ConfirmOrderModalContentComponent],
})
export class OrderAreaModule {
}
