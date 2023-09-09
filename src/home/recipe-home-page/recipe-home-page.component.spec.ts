import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHomePageComponent } from './recipe-home-page.component';

describe('ReceipeHomePageComponent', () => {
  let component: RecipeHomePageComponent;
  let fixture: ComponentFixture<RecipeHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeHomePageComponent]
    });
    fixture = TestBed.createComponent(RecipeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
