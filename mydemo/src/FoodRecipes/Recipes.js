import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="">
      <div className="">
        <img
          className=""
          src={recipe.image}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="">
            {recipe.dishType[0]}
          </h2>
          <h1 className="">
            {recipe.label}
          </h1>
          <p className="">
            <b>Ingredients: </b> 
            {recipe.ingredientLines.map((ingredient)=>(
              <p>{ingredient}</p> 
            ))}
          </p>
          <div className="">
            <a
              href={recipe.url}
              className=""
            >
              View Recipe
            </a>
            <span className="">
              1.2K
            </span>
            <span className="">
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;