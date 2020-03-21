import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {OrderStates, OrderStateService} from './order-state.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent {
  states = OrderStates;
  readonly state: Observable<OrderStates>;

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
}
