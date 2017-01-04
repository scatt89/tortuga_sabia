import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {routing} from "./app.routing";

import { AppComponent } from './app.component';
import {FooterComponent} from "./components/footer/footer.component";
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {MainComponent} from "./components/main/main.component";
import {AboutComponent} from "./components/about/about.component";
import {LoginComponent} from "./components/login/login.component";
import {ContactComponent} from "./components/contact/contact.component";

import {AdviceService} from "./services/advice.service";
import {ImageService} from "./services/image.service";

/**
 * Created by Marrarichy Da Silva Garcia on 3/01/17.
 * E-mail: dasilvagarciam@gmail.com
 */

@NgModule({
  declarations: [
    AppComponent,FooterComponent,MainComponent,HeaderComponent,HomeComponent,AboutComponent,ContactComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [AdviceService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
