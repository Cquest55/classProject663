import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RecipeHomePageComponent} from "../home/recipe-home-page/recipe-home-page.component";
import {NavbarComponent} from "../navbar/navbar/navbar.component";
import {HeaderComponent} from "../header/header/header.component";
import {FooterComponent} from "../footer/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    RecipeHomePageComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
