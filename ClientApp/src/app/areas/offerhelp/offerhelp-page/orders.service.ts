import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OrdersGateway, PostOrderReq} from '../../../core/backend-api/gateways/orders.gateway';
import { Order, OrderItem } from '../order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private readonly ordersGateway: OrdersGateway,
  ) {
  }

  postOrder(order: Order): Observable<void> {
    const params: PostOrderReq = {
      orders: order.orderItems.map((order) => {
        return {
          product: order.product,
          items: order.items,
          maximum_price_per_item: order.maxPricePerItem,
          comment: order.comment,
        };
      }),
    };

    return this.ordersGateway.postOrders(params);
  }
}
