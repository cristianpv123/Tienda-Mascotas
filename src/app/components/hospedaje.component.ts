import { Component } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

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

	public mostrarCalendario(param){
		console.log("Di al mostrarCalendario -> "+param);
		if(param == "fecha_init"){
			$('#fecha_init').datepicker();
		}else{
			$('#fecha_end').datepicker();
		}
		
	}

}