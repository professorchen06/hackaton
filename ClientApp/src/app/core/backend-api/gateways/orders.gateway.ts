import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface PostOrderReq {
  orders: {
    product: string;
    items: number;
    maximum_price_per_item: number;
    comment: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class OrdersGateway {
  constructor(private readonly http: HttpClient) {
  }

  postOrders(params: PostOrderReq): Observable<void> {
    return this.http.post<void>('/api/orders', params);
  }
}
