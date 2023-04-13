const getRecipeById = require("../controllers/getRecipeById");
const getRecipeByQuery = require("../controllers/getRecipesQuery")
const postRecipe = require("../controllers/postRecipe")

const getRecipesIdHandler = async (req, res) => {
  const { idRecipe } = req.params;
  try {
    const recipe = await getRecipeById(idRecipe);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


const getRecipesQueryHandler = async (req, res) => {
  const {title} = req.query;
  console.log("x")
  try {
    if(title) {
      const result = await getRecipeByQuery(title);
      res.status(200).json(result);
    } else {
      throw Error("Receta no encontrada");
    }
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}


const postRecipesHandler = async (req, res) => {
  const {title, image, summary, healthscore, instructions, diets} = req.body;

  try {
      const newRecipe = await postRecipe({title, image, summary, healthscore, instructions, diets, created: true})
      res.status(201).json(newRecipe);
  } catch (error) {
      res.status(404).json({error: error.message});
  }
  }
  


module.exports = { getRecipesIdHandler, getRecipesQueryHandler, postRecipesHandler };

// 📍 POST | /recipes
// Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).
