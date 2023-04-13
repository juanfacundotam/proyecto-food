const {Router} = require("express");
const recipesRouter = Router();
const {getRecipesIdHandler, getRecipesQueryHandler, postRecipesHandler} = require("../Handlers/recipesHandlers");
const postValidate = require("../middleware/postValidate")


recipesRouter.get("/:idRecipe", getRecipesIdHandler);
recipesRouter.get("/", getRecipesQueryHandler);
recipesRouter.post("/", postValidate, postRecipesHandler);



module.exports = recipesRouter;