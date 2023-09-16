import { Component } from '@angular/core';
import {Recipe, RecipeService} from "../../home/recipe/recipe.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  protected RecipeService = RecipeService;

  constructor(private recipeService: RecipeService) { }

  formData : Recipe = {
    ingredients: "",
    title: ""
  }

  onSubmit(form: any) {
    if (form.valid && this.formData.title !== '' && this.formData.ingredients !== '') {

      this.recipeService.insertRec(this.formData.title, this.formData.ingredients)
          .subscribe(
              (recipe: any) => {
                console.log('Recipe Saved!', recipe);
                alert('Recipe Saved!');
              },
              (error: any) => {
                console.error('Error saving recipe:', error);
                alert('Error saving recipe. Please try again later.');
              }
          );

    } else {
      alert('PLEASE FIX THE FORM CONTENTS');
    }
  }

  private refresh() {
    window.location.reload();
  }
}
