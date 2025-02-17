import { Component, Input,  } from '@angular/core';
import { ProductCard } from '../product-card';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 
  @Input() ProductCard! : ProductCard;

}
