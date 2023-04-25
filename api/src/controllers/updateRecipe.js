const {Recipe} = require("../db");
const getRecipeById = require("../controllers/getRecipeById");

const updateRecipe = async (id) => {
    if(!title || !image || !summary || !healthscore || !instructions || !diets) return res.status(404).send("Faltan datos")

    const recipe = await Recipe.findOne({where: {id: id}});
    recipe.title = title;
    recipe.image = image;
    recipe.summary = summary;
    recipe.healthscore = healthscore;
    recipe.instructions = instructions;
    recipe.diets = diets;

    const newRecipeWhitDiets = await getRecipeById(id);
    return newRecipeWhitDiets;
};

module.exports = updateRecipe;

