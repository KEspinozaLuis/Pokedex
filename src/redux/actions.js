import { GET_POKEMONS } from "./actionTypes";
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

export const getPokemonsId = (id) => {
    
}