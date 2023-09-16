import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RecipeComponent} from "../home/recipe/recipe.component";
import {NavbarComponent} from "../navbar/navbar/navbar.component";
import {HeaderComponent} from "../header/header/header.component";
import {FooterComponent} from "../footer/footer/footer.component";
import { RecipeService } from "../home/recipe/recipe.service";
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from '../form/form/form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    NavbarComponent,
    HeaderComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
