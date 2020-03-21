import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product} from "../product";
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  public products: Product[];
  constructor(public productsE: ProductsService) { 
    this.products = productsE.products;
  }
  columnsToDisplay = ['name','count','price', 'pricemult'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit(): void {
  }

}
