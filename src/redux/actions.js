import { 
    GET_POKEMONS, 
    SEARCH_NAME,
    FILTER_TYPE,
    REMOVE_FILTER,
    CLEAR_FILTER
} from "./actionTypes";
import axios from "axios";

const URL_API = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0.";

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(URL_API);
            const promises = data.results.map( async (promesa) => {
                const response = await axios.get(promesa.url)
                return response.data;
            })

            const results = await Promise.all(promises);

            return dispatch({
                type: GET_POKEMONS,
                payload: results
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const searchName = (payload)=>{
    return {
        type: SEARCH_NAME,
        payload
    }
}

export const filterType = (payload) =>{
    return {
        type: FILTER_TYPE,
        payload
    }
}

export const removeFilter = (payload) => {
    return {
        type: REMOVE_FILTER,
        payload
    }
}

export const clearFilter = () =>{
    return {
        type: CLEAR_FILTER
    }
}