import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderInformation } from './order-information';

describe('OrderInformation', () => {
  let component: OrderInformation;
  let fixture: ComponentFixture<OrderInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
