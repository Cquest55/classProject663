import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs";

export interface Recipe {
  name: string
}

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) {}


  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:8080/apiRec/recipes')
  }

  //TODO: will make this later
  getRecipe(title: string): Observable<Recipe> {
    return this.http.get<Recipe>('http://localhost:8080/apiRec/singleRec/' + title)
  }

  insertCat(title: String, ingredients:string ): Observable<Recipe> {
    return this.http.post<Recipe>('http://localhost:8080/apiRec/insertRec/', [title, ingredients])
  }

  deleteCat(title: string) {
    return this.http.delete('http://localhost:8080/apiRec/delRec/' + title)
  }
}
