import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  name = 'Hello Angular World!!';
  products: Product[];
  constructor() {
    this.products = [
      {
        id: 11,
        title: "OPPO F5 Youth (Gold, 32 GB)",
        modelName: "F5 Youth",
        color: "Gold",
        productType: "Mobile",
        brand: "OPPO",
        price: 16990
      },
      {
        id: 12,
        title: "Dell Inspiron 7000",
        modelName: "Inspiron",
        color: "Gray",
        productType: "Laptop",
        brand: "DELL",
        price: 59990
      }
    ];
   }

}