import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { miComponente } from './components/miComponente/miComponente.component';
import { MoviesComponent } from './components/movies/movies.component';
@NgModule({
  declarations: [
    AppComponent,
    miComponente,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
