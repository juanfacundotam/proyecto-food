import {
  CLEAN_DETAIL,
  FILTER_BY_DIETS,
  FILTER_CREATED,
  GET_ALL_DIETS,
  GET_RECIPES,
  GET_RECIPES_DETAIL,
  REFRESH_RECIPES,
  ORDER_ID,
  ORDER_HEALTHSCORE,
  GET_RECIPES_ORDER,
  SEARCH_BY_QUERY,
  DELETE_RECIPE,
} from "./actions";

const initialState = {
  recipes: [],
  allRecipes: [],
  recipesBackup: [],
  recipe: {},
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  let allRecipesAux;
  let recipesFiltered;
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, allRecipes: action.payload };
    case GET_RECIPES_DETAIL:
      return { ...state, recipe: action.payload };
    case CLEAN_DETAIL:
      return { ...state, recipe: {} };
    case GET_ALL_DIETS:
      return { ...state, diets: action.payload };
    case REFRESH_RECIPES:
      return { ...state, recipes: state.allRecipes };
      case FILTER_CREATED:
        allRecipesAux = state.allRecipes;
        console.log(allRecipesAux)
        recipesFiltered =
          action.payload === "API"
          ? allRecipesAux.filter((recipe) => !recipe.created)
            : allRecipesAux.filter((recipe) => recipe.created)
            console.log(recipesFiltered)
        return {
          ...state,
          recipes: action.payload === "All" ? state.allRecipes : recipesFiltered,
          recipesBackup: action.payload === "All" ? state.allRecipes : recipesFiltered
        };
    case FILTER_BY_DIETS:
      allRecipesAux = state.recipesBackup;
      recipesFiltered =
        action.payload === "All"
          ? allRecipesAux
          : allRecipesAux.filter((recipe) =>
              recipe.diets.includes(action.payload)
            );
      return { ...state, recipes: recipesFiltered.length ? recipesFiltered : [{error: "sin resultados"}]};
    case ORDER_ID:
      let sortRecipes = [...state.recipes];
      console.log(sortRecipes);
      sortRecipes =
        action.payload === "Ascendente"
          ? sortRecipes.sort((a, b) =>
              b.title.toLowerCase() < a.title.toLowerCase() ? 1 : -1
            )
          : sortRecipes.sort((a, b) =>
              a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
            );
      return {
        ...state,
        recipes: sortRecipes,
      };
    case ORDER_HEALTHSCORE:
      const orderHealth =
        action.payload === "Ascendente"
          ? state.recipes.sort((a, b) => a.healthscore - b.healthscore)
          : state.recipes.sort((a, b) => b.healthscore - a.healthscore);
      console.log(orderHealth);
      return {
        ...state,
        recipes: orderHealth,
      };
    case SEARCH_BY_QUERY:
      console.log(action.payload)
      return { ...state, recipes: action.payload };
      case DELETE_RECIPE:
        return {...state }
    default:
      return { ...state };
  }
};

export default rootReducer;
