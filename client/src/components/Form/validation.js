const validation = (recipe) => {
  const errors = {};

  if(!recipe.title) errors.title = "> Title: No puede quedar vacío";
  else if (recipe.title.length > 90) errors.title = "> Title: Máximo 90 caracteres";
  console.log(recipe.healthscore)
  if(recipe.healthscore === '') errors.healthscore = "> Health Score: Ingresa un número (1-100)";
  else if(recipe.healthscore === 0) errors.healthscore = "> Health Score: Ingresa un número (1-100)";
  else if(recipe.healthscore === "0") errors.healthscore = "> Health Score: Ingresa un número (1-100)";
  else if(recipe.healthscore > 100) errors.healthscore = "> Health Score: Ingresa un número (1-100)";

  if(!recipe.summary) errors.summary = "> summary: No puede quedar vacío";
  // if(!recipe.instructions[1]) errors.instructions = "> instructions: Al menos una instrucción";
  if(Object.values(recipe.instructions).includes("")) errors.instructions = "> instructions: No dejes instrucciones incompletas";
  // console.log(errors.healthscore)

  if(!recipe.image) errors.image = "> Image: La receta debe contar con una imagen";
  
  return errors;
};

export default validation;

