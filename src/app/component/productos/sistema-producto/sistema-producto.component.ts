import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


//Servicio Auth
import {AuthService} from '../../../services/auth.service';
//servicio producto
import {ProductoService} from '../../../services/producto.service';

// Class Producto
import { Producto } from '../../../Model/producto';

@Component({
  selector: 'app-sistema-producto',
  templateUrl: './sistema-producto.component.html',
  styleUrls: ['./sistema-producto.component.css']
})
export class SistemaProductoComponent implements OnInit {

  constructor(public productoService: ProductoService,public auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.productoService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm)
  {
    if(productForm.value.$key == null)
      this.productoService.insertProduct(productForm.value);
    else
    this.productoService.updateProduct(productForm.value);

    this.resetForm(productForm);
    //this.toastr.success('Sucessful Operation', 'Product Registered');
  }

  resetForm(productForm?: NgForm)
  {
    if(productForm != null)
      productForm.reset();
      this.productoService.selectedProduct = new Producto();
  }

  logout(){
    this.auth.logoutUser().then((data)=>{
      this.router.navigate(['home']);

      });
    }
}
