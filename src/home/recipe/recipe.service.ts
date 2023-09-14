import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {catchError, Observable, throwError} from "rxjs";

export interface Recipe {
  title: string
}

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:8080/apiRec/recipes').pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  //TODO: will make this later
  getSingleRec(title: string): Observable<Recipe> {
    return this.http.get<Recipe>('http://localhost:8080/apiRec/singleRec/' + title)
  }

  insertRec(title: string, ingredients:string ): Observable<Recipe> {
    return this.http.post<Recipe>('http://localhost:8080/apiRec/insertRec/', [title, ingredients])
  }

  deleteRec(title: string) {
    return this.http.delete('http://localhost:8080/apiRec/delRec/' + title)
  }
}
