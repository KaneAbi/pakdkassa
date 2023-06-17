import { Component, OnInit, OnDestroy, Input,  EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from '../cart.service';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total: number = 0;
  mobile: Boolean;

  displayedColumns: string[] = ['artikel', 'anzahl', 'total'];
  @Input() cartTotal: number;
  @Input() cartItems: CartItem[];
  @Input() given: number;
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number
  }>();  
  

  onCartItemDeleted(productData:{productId: number}) {
    this.cartItemDeleted.emit({
        productId: productData.productId
      });    
  }

  onCartItemChanged(productData:{productId: number}) {
    this.cartItemChanged.emit({
        productId: productData.productId
      });    
  }

  constructor(private cartService: CartService) {
    this.mobile = !cartService.getIsMobileResolution();
  }
 
  ngOnInit() {
  }
}
