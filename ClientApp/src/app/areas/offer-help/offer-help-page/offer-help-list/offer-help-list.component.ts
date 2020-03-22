import { Component, OnInit } from '@angular/core';
import { OrdersService} from "../../../../orders.service";
import { Order, OrderItem} from "../../../../order.model";
import { Observable } from 'rxjs';
import {of} from 'rxjs';

@Component({
  selector: 'app-offer-help-list',
  templateUrl: './offer-help-list.component.html',
  styleUrls: ['./offer-help-list.component.scss']
})
export class OfferHelpListComponent implements OnInit {

  
  public readonly orders: Observable<Order[]>;
  public columnsToDisplay: String[];
  constructor(public readonly ordersService: OrdersService ) { 

    this.orders = this.ordersService.getOrders();
    this.columnsToDisplay = ["product", "items", "maxPricePerItem", "comment"];
    /*this.orders = of([{id: 'foo', orderItems: [{
      id: '10',
      product: "asd",
      items: 123,
      maxPricePerItem: 10.34,
      comment: "Hallo WelT!"
    },
    {
      id: '100',
      product: "assd",
      items: 13,
      maxPricePerItem: 100.34,
      comment: "Dies ist ein Test"
    }]}]);*/
  }

  
  

  ngOnInit(): void {
  }

}
