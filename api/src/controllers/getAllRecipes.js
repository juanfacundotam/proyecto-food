const axios = require("axios");
const { Recipe, Diet } = require("../db");

const apiKey = "apiKey=80ded4eb560843f7ab7a0f95adcf3f80";
const urlApi = `https://api.spoonacular.com`;

const getAllRecipes = async () => {
  const recipesBdd = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  // const recipesMap = recipesBdd.flatMap(elem => elem.Diets.map(elem => elem.name))

  const recipesDiets = recipesBdd.map((recipe) => {
    const diets = recipe.Diets.map((diet) => diet.name);
    return { ...recipe.toJSON(), diets };
  });
  const recipesBddResults = recipesDiets.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      healthscore: recipe.healthscore,
      // summary: recipe.summary,
      // instructions: recipe.instructions,
      created: recipe.created,
      diets: recipe.diets,
    };
  });


  let response = await axios.get(
    "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"
  );
  // let response = await axios.get(
  //   "https://api.spoonacular.com/recipes/complexSearch?apiKey=80ded4eb560843f7ab7a0f95adcf3f80&addRecipeInformation=true"
  // );
  const allRecipes = response.data.results.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      healthscore: recipe.healthScore,
      // summary: recipe.summary,
      // instructions: recipe.instructions,
      diets: recipe.diets,
      created: false,
    };
  });

  const result = [...recipesBddResults, ...allRecipes];
  // console.log(result)
  return result;
};

module.exports = getAllRecipes;
