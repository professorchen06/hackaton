import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderAreaRoutingModule } from './order-area-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderFormComponent } from './order-page/order-form/order-form.component';
import { ConfirmOrderModalContentComponent } from './confirm-order-modal-content/confirm-order-modal-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemListComponent } from 'src/app/item-list/item-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
@NgModule({
  imports: [
    OrderAreaRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [OrderPageComponent, OrderFormComponent, ItemListComponent],
})
export class OrderAreaModule {
}
