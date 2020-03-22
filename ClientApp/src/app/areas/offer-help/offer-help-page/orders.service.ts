import {Injectable} from '@angular/core';
import {OrdersGateway} from '../../../core/backend-api/gateways/orders.gateway';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private readonly ordersGateway: OrdersGateway,
  ) {
  }
}
