import { 
    GET_POKEMONS, 
    SEARCH_NAME,
    FILTER_TYPE,
    REMOVE_FILTER,
    CLEAR_FILTER
 } from "./actionTypes";

const initialState = {
    pokemons: [],
    backupPokemons: [],
    filters: []
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
            const filterTypes = state.backupPokemons.filter(pokemon => pokemon.types.map(type=>type.type.name).includes(payload));
            const allFilterPokemons = [...state.filters, ...filterTypes]; 
            const removeRepeat = new Set(allFilterPokemons);
            state.filters = [...removeRepeat];

            return {
                ...state,
                pokemons: state.filters
            }
        case REMOVE_FILTER: 
            const removeFilter = state.filters.filter(pokemon => !pokemon.types.map(type => type.type.name).includes(payload))
            state.filters = removeFilter;
            return {
                ...state,
                pokemons: state.filters.length === 0 ? state.backupPokemons : state.filters
            }
        case CLEAR_FILTER:
            return {
                ...state,
                pokemons: state.backupPokemons,
                filters: []
            }
        default:
            return {...state};
    }

}

export default rootReducer;