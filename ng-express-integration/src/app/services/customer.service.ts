import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  /** We don't need to provide complete full path here. Just a relative path is enough */
  private baseUrl = '/customerarray/customers';

  constructor(private http: HttpClient) {
    console.log("CustomerService Created");
  }

  getAllCustomers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCustomerById(email: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + email);
  }

  deleteCustomerById(email: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + email);
  }

  updateCustomerById(email: string, customer: any): Observable<any> {
    return this.http.put(this.baseUrl + "/" + email, customer);
  }

  addCustomer(customer: any): Observable<any> {
    return this.http.post(this.baseUrl, customer);
  }
}
