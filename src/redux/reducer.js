import { 
    GET_POKEMONS, 
    SEARCH_NAME,
    FILTER_TYPE
 } from "./actionTypes";

const initialState = {
    pokemons: [],
    backupPokemons: [],
    filter: []
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
        case FILTER_TYPE:
            const filterTypes = state.backupPokemons.filter(pokemon => pokemon.types.map(type=>type.type.name).includes(payload)) 
            state.filter = [...state.filter, ...filterTypes]; 

            return {
                ...state,
                pokemons: state.filter
            }
        default:
            return {...state};
    }

}

export default rootReducer;