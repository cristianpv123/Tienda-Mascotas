import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { HomeComponent } from './components/home.component';
import { HospedajeComponent } from './components/hospedaje.component';
import { CantinaComponent } from './components/cantina.component';
import { CantinaDetailComponent } from './components/cantina-detail.component';
import { TiendaComponent } from './components/tienda.component';
import { ProductoDetailComponent } from './components/producto-detail.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},	
	{path: 'home', component:HomeComponent},
	{path: 'hospedaje', component:HospedajeComponent},
	{path: 'cantina', component:CantinaComponent},
	{path: 'cantina-detail', component:CantinaDetailComponent},
	{path: 'tienda', component:TiendaComponent},
	{path: 'producto-detail', component:ProductoDetailComponent},
	{path: '**', component:HomeComponent}
];
 
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);