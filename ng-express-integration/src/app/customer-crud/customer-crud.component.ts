import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-crud',
  templateUrl: './customer-crud.component.html',
  styleUrls: ['./customer-crud.component.css']
})

export class CustomerCrudComponent implements OnInit {

  title = 'Customer'
  customers = [];
  customer: any
  message = ''
  mode='';

  add = false;
  save = false;
  txtemail=true;

  constructor(private cs: CustomerService) {
    console.log("CustomerCrudComponent Constructor");
  }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.cs.getAllCustomers()
      .subscribe(response => {
        this.customers = response
      }, error => this.message = error)
  }

  getCustomerById(email: number) {
    this.mode='Update Customer';
    this.txtemail = true;
    this.add = true;
    this.save = false;

    this.cs.getCustomerById(email)
      .subscribe(response => {
        this.customer = response[0];
      }, error => this.message = error)
  
  }

  deleteCustomerById(email: string) {
    this.cs.deleteCustomerById(email)
      .subscribe(response => {
        this.customers = response
      }, error => this.message = error)
    this.customer = null;
  }

  updateCustomerById(email: string) {
    this.cs.updateCustomerById(email, this.customer)
      .subscribe(response => {
        this.customers = response;
        alert('Customer updated successfully!');
      }, error => this.message = error)
    this.customer = null;
  }

  addCustomer() {
    if (this.customer.email != '') {
      this.cs.addCustomer(this.customer)
        .subscribe(response => {
          this.customers = response;
          alert('Customer added successfully!');
        }, error => this.message = error)
      this.customer = null;
    }
    else {
      alert('Please enter required data marked with *');
    }
  }

  onCancel()
  {
    this.customer = null;
  }

  addNewCustomer() {
    this.mode='Add New Customer';
    this.customer = {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: ''
    }
    this.add = false;
    this.save = true;
    this.txtemail = false;
  }
}
