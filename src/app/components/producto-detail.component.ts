import { Component } from '@angular/core';

@Component({
	selector: 'producto-detail',
	templateUrl: '../views/producto-detail.component.html'
})

export class ProductoDetailComponent{
	public titulo:string;

	constructor(){
		this.titulo = 'Detalle Producto';
	}

	ngOnInit(){
		console.log("Component producto-detail cargado correctamente.");
	}
}