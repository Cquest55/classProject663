import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RecipeComponent} from "../home/recipe/recipe.component";
import {NavbarComponent} from "../navbar/navbar/navbar.component";
import {HeaderComponent} from "../header/header/header.component";
import {FooterComponent} from "../footer/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
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
