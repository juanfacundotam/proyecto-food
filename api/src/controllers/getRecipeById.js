const axios = require("axios");
const {Recipe, Diet} = require("../db")

const apiKey = "apiKey=80ded4eb560843f7ab7a0f95adcf3f80";
const urlApi = `https://api.spoonacular.com`;

const getRecipeById = async (idRecipe) => {
    //Si es UUID
    if (isNaN(idRecipe)) {
      const resBdd = await Recipe.findByPk(idRecipe, {
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attibutes: [],
          },
        },
      });
      if (resBdd) return resBdd;
      else throw Error("Receta no encontrada BDD")
    }
    //Si no es UUID
    const response = await axios.get(
      `${urlApi}/recipes/${idRecipe}/information?${apiKey}`
    );
    const { id, title, image, readyInMinutes, diets } = response.data;
    if (title) return { id, title, image, readyInMinutes, diets };
    else throw Error("Receta no encontrada API")
    
  };

  module.exports = getRecipeById;