import { Component } from '@angular/core';

@Component({
	selector: 'tienda',
	templateUrl: '../views/tienda.component.html'
})

export class TiendaComponent{
	public titulo:string;

	constructor(){
		this.titulo = 'Tienda';
	}

	ngOnInit(){
		console.log("Component tienda cargado correctamente.");
	}

	
}