const { Router } = require("express");
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const getRecipeById = require("../controllers/getRecipeById")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const apiKey = "apiKey=80ded4eb560843f7ab7a0f95adcf3f80";
const urlApi = `https://api.spoonacular.com`;



// const getBddRecipeById = async (idRecipe) => {
// //   const response = await Recipe;
// };

// router.get("/", async (req, res) => {
//   const info = await getApiRecipeById();
//   res.status(200).send(info);
// });
router.get("/recipes/:idRecipe", async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const info = await getRecipeById(idRecipe);
    res.status(200).json(info);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
router.post("/recipes", (req, res) => {
  //Busca por query y sino trae todas, de la api y base
  res.status(200).send("NIY: se hara un post de recetas/");
});

router.get("/diets", (req, res) => {
  res.status(200).send("NIY: Estoy en ruta  /diets");
});

module.exports = router;

// 📍 GET | /recipes/:idRecipe
// Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
// La receta es recibida por parámetro (ID).
// Tiene que incluir los datos de los tipos de dietas asociados a la receta.
// Debe funcionar tanto para las recetas de la API como para las de la base de datos.
// 📍 GET | /recipes/name?="..."
// Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarla independientemente de mayúsculas o minúsculas.
// Si no existe la receta, debe mostrar un mensaje adecuado.
// Debe buscar tanto las de la API como las de la base de datos.
// 📍 POST | /recipes
// Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).
// 📍 GET | /diets
// Obtiene un arreglo con todos los tipos de dietas existentes.
// En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la documentación.
// Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.
