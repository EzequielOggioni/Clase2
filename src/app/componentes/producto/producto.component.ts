import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  public miProducto:Producto ;
  
  constructor() { 
    this.miProducto = new Producto();

  }

  ngOnInit(): void {
  }

}
