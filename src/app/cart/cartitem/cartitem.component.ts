import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { CartItem } from '../cart.model';


@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number
  }>();  

  onCartItemDeleted(id) {
    this.cartItemDeleted.emit({
        productId: id
      });
  }  

  onCartItemChanged(id) {
    this.cartItemChanged.emit({
        productId: id
      });    
  }

  constructor() {
   }

  ngOnInit() {

  }


}
