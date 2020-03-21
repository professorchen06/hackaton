import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {OrderStates, OrderStateService} from './order-state.service';
import { Order, OrderItem } from '../order.model';

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

  addOrderItem(orderItem: OrderItem): void {
    this.order.orderItems.push(orderItem);
  }
}
