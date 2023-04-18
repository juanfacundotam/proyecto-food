import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_DETAIL = "GET_RECIPES_DETAIL"
export const CLEAN_DETAIL ="CLEAN_DETAIL"
export const GET_ALL_DIETS = "GET_ALL_DIETS"


export const getRecipes = () => {
    return async (dispatch) => {

        const response = await axios.get("http://localhost:3001/recipes")
        const recipes = response.data;
        console.log(recipes)
        dispatch({type: GET_RECIPES, payload: recipes})
    }
}

export const getRecipesDetail = (id) => {
    return async (dispatch) => {
        // const response = await axios.get(`http://localhost:3001/recipes/782585`)
        const response = await axios.get(`http://localhost:3001/recipes/${id}`)
        const recipe = response.data;
        console.log(recipe)
        dispatch({type: GET_RECIPES_DETAIL, payload: recipe})
    }
}

export const cleanDetail = () => {
    return {type: CLEAN_DETAIL};
}

export const getAllDiets = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/diets`);
        const allDiets = response.data;
        dispatch({type: GET_ALL_DIETS, payload: allDiets})
    }
}
