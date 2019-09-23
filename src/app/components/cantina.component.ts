import { Component } from '@angular/core';

@Component({
	selector: 'cantina',
	templateUrl: '../views/cantina.component.html'
})

export class CantinaComponent{
	public titulo:string;

	constructor(){
		this.titulo = 'Cantina';
	}

	ngOnInit(){
		console.log("Component Cantina cargado correctamente.");
	}
}