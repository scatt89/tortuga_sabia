import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FooterComponent} from "./components/footer/footer.component";
import {MainComponent} from "./components/main/main.component";
import {HeaderComponent} from "./components/header/header.component";

import {AdviceService} from "./services/advice.service";
import {ImageService} from "./services/image.service";

/**
 * Created by Marrarichy Da Silva Garcia on 3/01/17.
 * E-mail: dasilvagarciam@gmail.com
 */

@NgModule({
  declarations: [
    AppComponent,FooterComponent,MainComponent,HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AdviceService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
