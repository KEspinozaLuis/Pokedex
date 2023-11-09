import { GET_POKEMONS } from "./actionTypes";

const initialState = {
    pokemons: []
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload
            };
        default:
            return {...state};
    }

}

export default rootReducer;