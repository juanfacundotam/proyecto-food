const {Recipe, Diet} = require("../db");
const getRecipeById = require("../controllers/getRecipeById");

const updateRecipe = async (id, recipe) => {

    if(!recipe.title || !recipe.image || !recipe.summary || !recipe.healthscore || !recipe.instructions || !recipe.diets) return res.status(404).send("Faltan datos")

    const updateRecipe = await Recipe.findOne({where: {id: id}});

    const allDiets = await Diet.findAll();
    const numDiets = allDiets.filter(obj => recipe.diets.includes(obj.name)).map(obj => obj.id);

    await updateRecipe.update(recipe)
    
    await updateRecipe.setDiets(numDiets);
    // update.dataValues.title = recipe.title;
    // recipe.image = image;
    // recipe.summary = summary;
    // recipe.healthscore = healthscore;
    // recipe.instructions = instructions;
    // recipe.diets = diets;

    const newRecipeWhitDiets = await getRecipeById(id);
    return newRecipeWhitDiets;
};

module.exports = updateRecipe;

// const diets = response.data.results.map((elem) => elem.diets);
// const allDiets = diets.flat(Infinity);
// const results = [...new Set(allDiets)];
// results.forEach((elem) => {
//   Diet.create({ name: elem });
// });
// return results;