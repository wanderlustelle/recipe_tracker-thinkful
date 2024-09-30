import React from "react";

// =============
// | RecipeList |
// =============
// displays a list of recipes and provides delete functionality

// ===========
// | RecipeRow |
// ===========
// renders a single row of recipe information
function RecipeRow({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} style={{ objectFit: "scale-down", width: "100%", height: "100%" }} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(recipe)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

// =================
// | RecipeList Main |
// =================
// main component that renders the recipe table
function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th><strong>Name</strong></th>
            <th><strong>Cuisine</strong></th>
            <th><strong>Photo</strong></th>
            <th><strong>Ingredients</strong></th>
            <th><strong>Preparation</strong></th>
            <th><strong>Actions</strong></th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeRow
              key={index}
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
