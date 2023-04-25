require('dotenv').config();
const {
  URL_API, API_KEY
} = process.env;
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { Op } = require('sequelize');

const getRecipeByQuery = async (title) => {
  const recipeBdd = await Recipe.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
  });

  let recipeApi = await axios.get(`${URL_API}/recipes/complexSearch?${API_KEY}&query=${title}`);
  recipeApi = recipeApi.data.results;
  
  const result = [...recipeBdd, ...recipeApi];
  if(result.length === 0) throw Error ("Recipe not found");

  return result;
};

module.exports = getRecipeByQuery;
