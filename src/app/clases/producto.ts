export class Producto {
    public Titulo:string="";
    public Precio:number=0;
    public MostrarPrecio():void{
        alert (" el precio es "+ this.Precio  );
    }
}
