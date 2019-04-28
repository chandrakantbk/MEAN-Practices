import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBasicsComponent } from './angular-basics.component';

describe('AngularBasicsComponent', () => {
  let component: AngularBasicsComponent;
  let fixture: ComponentFixture<AngularBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
