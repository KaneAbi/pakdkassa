import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductItem } from './product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productItem: ProductItem[] = [
    /*new ProductItem(1, 'Wasser', 1, 0),
    new ProductItem(2,'Cola', 1.50, 0),
    new ProductItem(3,'Red Bull', 2.50, 0),
    new ProductItem(4,'Adana', 6.50, 1),
    new ProductItem(5,'Tavuk', 6.50, 1),
    new ProductItem(6,'Grill gemischt', 6.50, 1),
  */]

  mobile: Boolean

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();

  constructor(private cartService: CartService) { 
    this.mobile = !cartService.getIsMobileResolution();
  }

  ngOnInit() {
    this.cartService.getProducts().subscribe(data => {
      console.log(data);
      this.productItem = data;
    })
  }

  onCartUpdated(id) {
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
        productId: this.productItem[index].id,
        productName: this.productItem[index].name,
        productPrice: this.productItem[index].price
      });
}


}
