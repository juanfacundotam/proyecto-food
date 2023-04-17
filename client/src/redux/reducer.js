import {
  CLEAN_DETAIL,
  GET_ALL_DIETS,
  GET_RECIPES,
  GET_RECIPES_DETAIL,
} from "./actions";

const initialState = {
  recipes: [],
  recipe: {},
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };
    case GET_RECIPES_DETAIL:
      return { ...state, recipe: action.payload };
    case CLEAN_DETAIL:
      return { ...state, recipe: {} };
    case GET_ALL_DIETS:
      return { ...state, diets: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
