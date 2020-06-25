import { Component, OnInit } from '@angular/core';
// model
import { Producto } from '../../../Model/producto';

// service
import { ProductoService } from '../../../services/producto.service';



@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productList: Producto[];

  constructor(public productService: ProductoService) { }

  ngOnInit() {
    return this.productService.getProducts()
      .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Producto);
        });
      });
  }

  onEdit(product: Producto) {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete($key: string) {
    if(confirm('Estas Seguro de Eliminarlo?')) {
      this.productService.deleteProduct($key);
      //this.toastr.warning('Deleted Successfully', 'Product Removed');
    }
  }

}
