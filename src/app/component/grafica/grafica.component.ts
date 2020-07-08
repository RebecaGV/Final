import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation'; 
import { ProductoService } from './../../services/producto.service';
import { Producto } from '../../Model/producto';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  productList: Producto[];

  constructor(public product : ProductoService){}


  public lineChartData: any = [{ data: [], label: 'Visitas' }];
  public lineChartLabels: any=[];// = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  public lineChartLegend = true;
  public lineChartType = 'line';
//  public array:any[] = [1,2,3,4,5,6];
  public lineChartPlugins = [pluginAnnotations];
 // public ChartData: any = [{data: this.array,label: 'hola'}];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  //constructor() { }

  ngOnInit() {
      this.product.getProducts()
      .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Producto);
          console.log(this.productList[0].name);
          });
          for(let i=0; i<this.productList.length; i++){ 
            this.lineChartLabels[i] = this.productList[i].name;
            this.lineChartData[0].data[i] = this.productList[i].price;
  
            }
      });
  }



  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
