import React, { useEffect, useState } from 'react'
import Recipe from './Recipes';

const App = () => {
  const APP_ID = "f643af62";
  const APP_KEY = "2a8e753613ccb01b4d26d9716e1b971d";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch
      (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div>
      <form class="" onSubmit={getSearch}>
        <div class="container">

          <div class="">
            <div class="">
              <label for="full-name" class="">Search Recipe</label>
              <input type="text" id="full-name" name="full-name" value={search} onChange={updateSearch} class="" />
            </div>

            <button type="submit" class="">Search</button>
          </div>
        </div>
      </form>

      <section class="">
        <div class="">
          <div class="">
            {recipes.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                recipe={recipe.recipe}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App