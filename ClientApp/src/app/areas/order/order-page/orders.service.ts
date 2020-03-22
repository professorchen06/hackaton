import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {IOrderResponse, OrdersGateway, PostOrderReq} from '../../../core/backend-api/gateways/orders.gateway';
import {Order} from '../order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private readonly ordersGateway: OrdersGateway,
  ) {
  }

  ordersMock = [
    {
      id: 1, orderItems: [
        {
          id: 2,
          product: 'name',
          items: 13,
          maxPricePerItem: 45,
          comment: 'comment',
        },
        {
          id: 3,
          product: 'Auto',
          items: 1,
          maxPricePerItem: 320,
          comment: 'Ja warum denn nicht?',
        },
        {
          id: 4,
          product: 'Klopapier',
          items: 99,
          maxPricePerItem: 318,
          comment: 'Klopapier ist wichtig',
        },
      ],
    },
    {
      id: 2, orderItems: [
        {
          id: 5,
          product: 'Apfel',
          items: 2,
          maxPricePerItem: 3,
          comment: 'Nicht die grünen',
        },
        {
          id: 6,
          product: 'Birne',
          items: 1,
          maxPricePerItem: 320,
          comment: 'Ja warum denn nicht?',
        },
        {
          id: 7,
          product: 'Schokolade',
          items: 4,
          maxPricePerItem: 2,
          comment: 'Sorte egal',
        },
      ],
    },
  ] as Order[];

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
    return of(this.ordersMock);
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
