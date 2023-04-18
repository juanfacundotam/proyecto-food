const axios = require("axios");
const { Recipe } = require("../db");

const apiKey = "apiKey=80ded4eb560843f7ab7a0f95adcf3f80";
const urlApi = `https://api.spoonacular.com`;

const getAllRecipes = async () => {
  const recipesBdd = await Recipe.findAll();

  let response = await axios.get(
    "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"
  );
  const allRecipes = response.data.results.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      // healthscore: recipe.healthScore,
      // summary: recipe.summary,
      // instructions: recipe.instructions,
      diets: recipe.diets,
    };
  });

  const result = [...recipesBdd, ...allRecipes];

  return result;
};

module.exports = getAllRecipes;
