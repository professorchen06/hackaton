import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IOrderResponse, OrdersGateway, PostOrderReq} from './core/backend-api/gateways/orders.gateway';
import {Order} from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private readonly ordersGateway: OrdersGateway,
  ) {
  }

  postOrder(order: Order): Observable<IOrderResponse[]> {
    const params: PostOrderReq[] =
      order.orderItems.map((orderItem) => {
        return {
          product: orderItem.product,
          items: orderItem.items,
          maximum_price_per_item: orderItem.maxPricePerItem,
          comment: orderItem.comment,
        };
      });

    return this.ordersGateway.postOrders(params);
  }

  getOrders(): Observable<Order[]> {
    return this.ordersGateway.getOrders().pipe(
      map((orders) => {
        return orders.map((order) => {
          return {
            id: order.id,
            orderItems: order.items.map((orderItem) => {
              return {
                id: orderItem.id,
                product: orderItem.product,
                items: orderItem.items,
                maxPricePerItem: orderItem.maximum_price_per_item,
                comment: orderItem.comment,
              };
            }),
          };
        });
      }),
    );
  }
}
