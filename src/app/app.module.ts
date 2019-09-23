import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { routing, appRoutingProviders } from './app.routing';

//Components
import { HomeComponent } from './components/home.component';
import { HospedajeComponent } from './components/hospedaje.component';
import { CantinaComponent } from './components/cantina.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HospedajeComponent,
    CantinaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
