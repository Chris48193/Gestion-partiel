import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PartielsComponent } from './partiels/partiels.component';
import { IsfatesComponent } from './isfates/isfates.component';
import { AppRoutingModule } from './routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartielsComponent,
    IsfatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
