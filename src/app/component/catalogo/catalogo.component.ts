import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';
import { Producto } from '../../Model/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productList: Producto[];
  public precioQr: string = 'null';

  public images=[

    {src:'/assets/img/im1.jpg',des:'barra',precio:'$20'},
    {src:'/assets/img/im2.jpg',des:'Chocolate2',precio:'$200'},
    {src:'/assets/img/im3.jpg',des:'Chocolate3',precio:'$40'},
    {src:'/assets/img/im4.jpg',des:'Chocolate4',precio:'$25'},
    {src:'/assets/img/im5.jpg',des:'Chocolate5',precio:'$30'},
    {src:'/assets/img/im6.jpg',des:'Bebida',precio:'$20'},
    {src:'/assets/img/im7.jpg',des:'Chocolate6',precio:'$50'},
    {src:'/assets/img/im8.jpg',des:'Chocolate7',precio:'$60'},
    {src:'/assets/img/im9.jpg',des:'Chocolate8',precio:'$70'},
    {src:'/assets/img/im10.jpg',des:'barra',precio:'$120'},
    {src:'/assets/img/im11.jpg',des:'barra',precio:'$920'},
    {src:'/assets/img/im12.jpg',des:'barra',precio:'$420'},
    {src:'/assets/img/im14.jpg',des:'barra',precio:'$250'},
    {src:'/assets/img/im16.jpg',des:'barra',precio:'$22'},
    {src:'/assets/img/im15.jpg',des:'barra',precio:'$20'},
  ];
  constructor(public product : ProductoService) { }

  ngOnInit(): void {
    this.product.getProducts().snapshotChanges().subscribe(item => {
      this.productList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productList.push(x as Producto);
        console.log(this.productList[0].name);
        });
      this.precioQr = this.productList[0].name;
    })
  }
}
