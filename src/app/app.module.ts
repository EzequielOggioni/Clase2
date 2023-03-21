import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ProductoComponent } from './componentes/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
