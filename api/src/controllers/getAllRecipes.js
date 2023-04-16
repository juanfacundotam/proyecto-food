const axios = require("axios");
const { Recipe} = require("../db");

const apiKey = "apiKey=80ded4eb560843f7ab7a0f95adcf3f80";
const urlApi = `https://api.spoonacular.com`;

const getAllRecipes = async () => {
  const recipesBdd = await Recipe.findAll();

  let recipesApi = await axios.get("https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5");
  recipesApi = recipesApi.data.results;

  const result = [...recipesBdd, ...recipesApi];

  return result;
};

module.exports = getAllRecipes;
