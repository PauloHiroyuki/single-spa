import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilhoComponent } from './empty-route/filho/filho.component';
import { PaiComponent } from './empty-route/pai/pai.component';

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    PaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
