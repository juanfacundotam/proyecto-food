import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_DETAIL = "GET_RECIPES_DETAIL";
export const CLEAN_DETAIL ="CLEAN_DETAIL";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const REFRESH_RECIPES = "REFRESH_RECIPES"
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";
export const FILTER_CREATED = "FILTER_CREATED"
export const ORDER_ID = "ORDER_ID"
export const ORDER_HEALTHSCORE = "ORDER_HEALTHSCORE"
export const GET_RECIPES_ORDER = "GET_RECIPES_ORDER"
export const SEARCH_BY_QUERY = "SEARCH_BY_QUERY"


export const getRecipes = () => {
    return async (dispatch) => {

        const response = await axios.get("http://localhost:3001/recipes")
        const recipes = response.data;
        dispatch({type: GET_RECIPES, payload: recipes})
    }
}

export const getRecipesDetail = (id) => {
    return async (dispatch) => {
        // const response = await axios.get(`http://localhost:3001/recipes/782585`)
        const response = await axios.get(`http://localhost:3001/recipes/${id}`)
        const recipe = response.data;
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

export const refreshRecipes = () => {
    return {
        type: REFRESH_RECIPES
    }
}

export const filterByDiets = (diet) => {
    return {
        type: FILTER_BY_DIETS,
        payload: diet
    }
}

export const filterCreated = (created) => {
    return {
        type: FILTER_CREATED,
        payload: created
    }
}

export const orderId = (idOrder) => {
    return {
        type: ORDER_ID,
        payload: idOrder
    }
}
export const orderHealthScore = (scoreOrder) => {
    return {
        type: ORDER_HEALTHSCORE,
        payload: scoreOrder
    }
}

export const searchByQuery = (query) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/recipes?title=${query}`)
        const recipes = response.data;
        dispatch({type: SEARCH_BY_QUERY, payload: recipes})
    }
} 

// export const getRecipesOrder = () => {
//     return {
//         type: GET_RECIPES_ORDER
//     }
// }


