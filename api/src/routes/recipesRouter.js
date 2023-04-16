const {Router} = require("express");
const recipesRouter = Router();
const {getRecipesIdHandler, getRecipesQueryHandler, postRecipesHandler} = require("../Handlers/recipesHandlers");
const postValidate = require("../middleware/postValidate")

recipesRouter.get("/", getRecipesQueryHandler);
recipesRouter.post("/", postValidate, postRecipesHandler);
recipesRouter.get("/:idRecipe", getRecipesIdHandler);



module.exports = recipesRouter;