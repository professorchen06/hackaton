import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
        category: [null, Validators.required],
        object: [null, Validators.required],
        quantity: [0, Validators.required, Validators.min(1)],
        maxPrice: [0, Validators.required],
      }
    );
  }

}
