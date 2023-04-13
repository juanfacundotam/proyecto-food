const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { Op } = require('sequelize');
const apiKey = "apiKey=80ded4eb560843f7ab7a0f95adcf3f80";
const urlApi = `https://api.spoonacular.com`;

const getRecipeByQuery = async (title) => {
  const recipeBdd = await Recipe.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
  });

  let recipeApi = await axios.get(`${urlApi}/recipes/complexSearch?${apiKey}&query=${title}`);
  recipeApi = recipeApi.data.results;
  
  const result = [...recipeBdd, ...recipeApi];
  if(result.length === 0) throw Error ("Recipe not found");

  return result;
};

module.exports = getRecipeByQuery;
