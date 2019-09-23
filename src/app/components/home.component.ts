import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: '../views/home.component.html'
})

export class HomeComponent{
	public titulo:string;

	constructor(){
		this.titulo = 'Home';
	}

	ngOnInit(){
		console.log("Component Home cargado correctamente.");
	}
}