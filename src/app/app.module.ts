import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FooterComponent} from "./components/footer/footer.component";
import {MainComponent} from "./components/main/main.component";
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,FooterComponent,MainComponent,HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
