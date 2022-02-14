import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { CountEmpleadosComponent } from './components/empleadosList/count-empleados/count-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosListComponent,
    CountEmpleadosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
