import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OrdersGateway, PostOrderReq} from '../../../core/backend-api/gateways/orders.gateway';

export interface IOrder {
  product: string;
  items: number;
  maxPricePerItem: number;
  comment: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private readonly ordersGateway: OrdersGateway,
  ) {
  }

  postOrder(orders: IOrder[]): Observable<void> {
    const params: PostOrderReq = {
      orders: orders.map((order) => {
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
