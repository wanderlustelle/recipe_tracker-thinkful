import React, { useState } from "react";

// ===============
// | RecipeCreate |
// ===============
// provides a form to create and add new recipes
function RecipeCreate({ addRecipe }) {
  // ============
  // | Form State |
  // ============
  // initial state for the form
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // state to manage form data
  const [formData, setFormData] = useState(initialFormState);

  // =================
  // | Event Handlers |
  // =================
  // handle input changes
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData); // add the new recipe
    setFormData(initialFormState); // reset the form
  };

  // ==============
  // | Render Form |
  // ==============
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            {/* ensure that the table structure matches the RecipeList table for alignment */}
            <td>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                required
              />
            </td>
            <td className="content_td">
              <textarea
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                required
              />
            </td>
            <td className="content_td">
              <textarea
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
