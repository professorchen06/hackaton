export interface Order {
  id?: number;
  orderItems: OrderItem[]
}

export interface OrderItem {
  id?: number;
  product: string;
  itmes: number;
  maxPricePerItem: number;
  comment: string;
}

