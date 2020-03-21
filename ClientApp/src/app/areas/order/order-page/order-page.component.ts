import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderItem } from '../order.model';
import { OrderStates, OrderStateService } from './order-state.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmOrderModalContentComponent } from '../confirm-order-modal-content/confirm-order-modal-content.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent {
  states = OrderStates;
  readonly state: Observable<OrderStates>;

  order: Order = { orderItems: [] };

  // Bestellbestätigung BEGIN
  confirmedOrder: boolean | null = null;
  // Bestellbestätigung END

  constructor(
    private readonly orderStateService: OrderStateService,
    public dialog: MatDialog,
  ) {
    this.state = orderStateService.observable();
  }

  startCheckout() {
    this.orderStateService.startCheckout();
  }

  completeOrder() {
    this.orderStateService.completeOrder();
  }

  startProductSelection() {
    this.orderStateService.startProductSelection();
  }

  addOrderItem(orderItem: OrderItem): void {
    this.order.orderItems.push(orderItem);
  }


  // Bestellbestätigung BEGIN
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmOrderModalContentComponent, {
      width: 'auto',
      data: { confirmedOrder: this.confirmedOrder }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result === "undefined") return;
      this.confirmedOrder = result;
    });
  }
  // Bestellbestätigung END
}
