import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderAreaRoutingModule} from './order-area-routing.module';
import {OrderPageComponent} from './order-page/order-page.component';
import { OrderFormComponent } from './order-page/order-form/order-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemListComponent } from 'src/app/item-list/item-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
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
  ],
  declarations: [OrderPageComponent, OrderFormComponent, ItemListComponent],
})
export class OrderAreaModule {
}
