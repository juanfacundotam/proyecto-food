const validation = (recipe) => {
  const errors = {};

  if(!recipe.title) errors.title = "> Title: No puede quedar vacío";
  else if (recipe.title.length > 90) errors.title = "> Title: Máximo 90 caracteres";
  
  if(!recipe.healthscore && !recipe.healthscore >= 0 && !recipe.healthscore <= 100) errors.healthscore = "> Health Score: Ingresa un número (0-100)";
  
  if(!recipe.summary) errors.summary = "> summary: No puede quedar vacío";
  if(!recipe.instructions) errors.instructions = "> instructions: Al menos una instrucción";
  if(!recipe.image) errors.image = "> Image: La receta debe contar con una imagen";
  
  return errors;
};

export default validation;

