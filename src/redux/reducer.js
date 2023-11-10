import { GET_POKEMONS, SEARCH_NAME } from "./actionTypes";

const initialState = {
    pokemons: [],
    backupPokemons: []
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                backupPokemons: payload
            };
        case SEARCH_NAME:
            const searchPokemon = state.backupPokemons.filter( pokemon => pokemon.name.toLowerCase().includes(payload.toLowerCase())) 
            return{
                ...state,
                pokemons: searchPokemon
            }
        default:
            return {...state};
    }

}

export default rootReducer;