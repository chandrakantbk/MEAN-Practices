import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectviesComponent } from './custom-directvies.component';

describe('CustomDirectviesComponent', () => {
  let component: CustomDirectviesComponent;
  let fixture: ComponentFixture<CustomDirectviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDirectviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
