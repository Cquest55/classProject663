import {Component, OnInit} from '@angular/core';
import {Recipe, RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{
  constructor(private recipeService: RecipeService) {
  }

  recipes: Recipe[] = [];
  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(
      (response) => {
        this.recipes = response;
        console.log(response);
      },
      (error) => {
        console.error('API Error:', error);
        // Handle errors here
      }
    );
  }

}
