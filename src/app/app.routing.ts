import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { HomeComponent } from './components/home.component';
import { HospedajeComponent } from './components/hospedaje.component';
import { CantinaComponent } from './components/cantina.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},	
	{path: 'home', component:HomeComponent},
	{path: 'hospedaje', component:HospedajeComponent},
	{path: 'cantina', component:CantinaComponent},
	{path: '**', component:HomeComponent}
];
 
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);