import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Model/producto';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  Array: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

}
