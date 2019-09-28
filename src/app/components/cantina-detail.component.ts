import { Component } from '@angular/core';

@Component({
	selector: 'cantina-detail',
	templateUrl: '../views/cantina-detail.component.html'
})

export class CantinaDetailComponent{
	public titulo:string;

	constructor(){
		this.titulo = 'Detalle Servicio';
	}

	ngOnInit(){
		console.log("Component Cantina-detail cargado correctamente.");
	}
}