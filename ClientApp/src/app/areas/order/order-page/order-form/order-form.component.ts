import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderItem } from '../../order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;

  @Output() addOrderItem = new EventEmitter<OrderItem>();

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
        product: ['', Validators.required],
        items: [0, [Validators.required, Validators.min(1)]],
        maxPricePerItem: [0, Validators.required],
        comment: ['', Validators.required],
      }
    );
  }

  cancel(): void {

  }

  addOrderPosition(): void {
    this.addOrderItem.emit(this.form.value);
  }
}
