
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-information',
  standalone: false,
  templateUrl: './order-information.html',
  styleUrls: ['./order-information.css']
})
export class OrderInformation implements OnInit {

  loading: boolean = false;
  errorMessage: string = '';

  order: any = null;

  ngOnInit(): void {
    this.getOrderInformation();
  }

  getOrderInformation(): void {

    this.loading = true;

    // Temporary dummy order information.
    // Later, replace this object with the backend API response.
    try {
      this.order = {

        orderNumber: '0016269772',
        orderDate: '2026-11-11T10:56:00',
        status: 'In Process',
        poNumber: 'TESTORDER-6789',

        email: 'bhanu@gmail.com',

        supportPhone: '(877) 224-0946',
        supportHours: 'Mon - Fri 8:30 - 8pm EST',

        billingInformation: {
          name: 'HYBRIS PROD TEST',
          addressLine1: '',
          addressLine2: '',
          city: 'PORT WASHINGTON',
          state: 'NY',
          postalCode: '11050-4606',
          country: 'United States'
        },

        shippingAddress: {
          name: 'HYBRIS PROD TEST',
          addressLine1: '',
          addressLine2: '',
          city: 'PORT WASHINGTON',
          state: 'NY',
          postalCode: '11050-4606',
          country: 'United States'
        },

        shippingMethod: 'Truck',
        shippingType: 'LTL Shipments',

        items: [
          {
            id: 1,
            productName: 'Prime Care Bed Model P903',
            sku: 'P903',
            imageUrl: 'assets/images/prime-care-bed.png',
            price: 1905.47,
            quantity: 1,
            unit: '1/Each',
            total: 1905.47,
            status: 'Backorder',
            plant: 'Atlanta, GA',
            estimatedShipDate: '2027-02-09',
            description: 'PRODUCT DESCRIPTION: PrimeCare Bed Model P903'
          }
        ],

        promotions: [],

        totals: {
          subtotal: 1905.47,
          estimatedFreight: 611.25,
          estimatedTax: 0,
          estimatedAccessorialsCost: 0,
          estimatedOrderTotal: 2516.72
        }

      };
    } catch (error) {
      this.errorMessage = 'Unable to load order information.';
    } finally {
      this.loading = false;
    }

  }

}
