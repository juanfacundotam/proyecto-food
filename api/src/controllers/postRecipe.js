const {Recipe} = require("../db");
const { v4: uuidv4 } = require('uuid');
const getRecipeById = require("../controllers/getRecipeById")


const postRecipe = async ({title, image, summary, healthscore, instructions, diets}) => {
    
    const id = uuidv4();
    // if(!title || !image || !summary || !healthscore || !instructions || !diets) return res.status(404).send("Faltan datos")
    const newRecipe = await Recipe.create({id, title, image, summary, healthscore, instructions});
    await newRecipe.addDiets(diets);

    const newRecipeWhitDiets = await getRecipeById(id);
    return newRecipeWhitDiets;
};

module.exports = postRecipe;