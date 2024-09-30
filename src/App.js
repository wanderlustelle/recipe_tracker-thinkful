import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // ================
  // | Delete Recipe |
  // ================
  // added a function to handle the deletion of a recipe
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((_, index) => index !== indexToDelete)
    );
  };

  // ================
  // | Add New Recipe |
  // ================
  // added a function to handle the addition of a new recipe
  const addRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
