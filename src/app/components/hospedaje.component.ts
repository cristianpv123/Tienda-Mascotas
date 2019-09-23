import { Component } from '@angular/core';

@Component({
	selector: 'hospedaje',
	templateUrl: '../views/hospedaje.component.html'
})

export class HospedajeComponent{
	public titulo:string;

	constructor(){
		this.titulo = 'Hospedaje';
	}

	ngOnInit(){
		console.log("Component Hospedaje cargado correctamente.");
	}
}