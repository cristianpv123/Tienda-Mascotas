import { Component } from '@angular/core';
/* para que funcione el jquery
declare var JQuery:any;
declare var $:any;
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title: string;
	public show_menu: boolean;

	constructor(){
		this.title = 'tienda-mascotas';
		this.show_menu = true;
	}

	ngOnInit(){
		/*$(document).ready(function(){
			if($("body").height() < $(window).height()){

				$("footer").css({"position":"absolute","bottom":"0px"});
			}
		});*/
	}

	hideMenu(){
		if(this.show_menu == true){
			this.show_menu = false;
		}else{
			this.show_menu = true;
		}
	}
}
