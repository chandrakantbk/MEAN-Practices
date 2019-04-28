import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCrudComponent } from './customer-crud.component';

describe('CustomerCrudComponent', () => {
  let component: CustomerCrudComponent;
  let fixture: ComponentFixture<CustomerCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
