import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RecipeComponent} from "../home/recipe/recipe.component";
import {NavbarComponent} from "../navbar/navbar/navbar.component";
import {HeaderComponent} from "../header/header/header.component";
import {FooterComponent} from "../footer/footer/footer.component";
import { RecipeService } from "../home/recipe/recipe.service";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
