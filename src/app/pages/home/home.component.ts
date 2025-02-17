import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  ProductCsard: ProductCard = {
    id: '2025',
    name: 'Hola',
    price: '250,000',
    image: `${this.baseUrl}/example-house.jpg`,
    description: 'Tamaño grande, movimiento de cuarzo, oro rosa, piel',
    
  };

  ProductCard!: ProductCard;
}
