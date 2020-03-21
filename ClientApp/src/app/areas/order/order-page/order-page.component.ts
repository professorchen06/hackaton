import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Order, OrderItem} from '../order.model';
import {OrderStates, OrderStateService} from './order-state.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent {
  states = OrderStates;
  readonly state: Observable<OrderStates>;

  order: Order = {orderItems: []};

  constructor(
    private readonly orderStateService: OrderStateService,
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
}
