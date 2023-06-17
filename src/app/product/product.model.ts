// import { Ingredient } from '../shared/ingredient.model';

export class ProductItem {
  public id: number;
  public name: string;
  public price: number;
  public typ: number; // 1 Getränk, 2 Essen, ...
  public storage: number;

  constructor(id: number, name: string, price: number, typ: number, ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.typ = typ;
  }
}
