const validation = (recipe) => {
  const errors = {};

  if(!recipe.title) errors.title = "> Title: No puede quedar vacío";
  else if (recipe.title.length > 90) errors.title = "> Title: Máximo 90 caracteres";
  if(recipe.healthscore === '') errors.healthscore = "> Health Score: Ingresa un número (1-100)";
  else if(recipe.healthscore === 0) errors.healthscore = "> Health Score: Ingresa un número (1-100)";
  else if(recipe.healthscore === "0") errors.healthscore = "> Health Score: Ingresa un número (1-100)";
  else if(recipe.healthscore > 100) errors.healthscore = "> Health Score: Ingresa un número (1-100)";

  if(!recipe.summary) errors.summary = "> summary: No puede quedar vacío";

  if(Object.values(recipe.instructions).includes("")) errors.instructions = "> instructions: No dejes instrucciones incompletas";


  if(!recipe.image) errors.image = "> Image: La receta debe contar con una imagen";
  
  return errors;
};

export default validation;

