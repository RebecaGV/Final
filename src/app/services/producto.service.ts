import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Producto} from '../Model/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   productList: AngularFireList<any>;
  selectedProduct: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Producto)
  {
    this.productList.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  updateProduct(product: Producto)
  {
    this.productList.update(product.$key, {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}
