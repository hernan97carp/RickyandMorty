
import { ADD_FAVORITE, DELETE_FAVORITE,FILTER, ORDER } from "./actions-types"


const initialState = {
    myFavorites: [],
    allCharacters:[]
}
const reducer = (state= initialState, {type, payload})=>{
    switch(type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: payload, //[...state.allCharacters, payload]
                allCharacters: payload,//[...state.allCharacters, payload]
                //uno lo vamos a usar para ir filtrando sin pisar el original
                 // con el otro puedo recuperar todo
            }
            case FILTER:        
                const allChardsFiltered= state.allCharacters.filter(char=> char.gender === payload)
                return{
                    ...state,
                    myFavorites: allChardsFiltered
                }
                case ORDER:
                    return{
                     ...state,
                     myFavorites:
                     payload === "Ascedente"
                     ?state.allCharacters.sort((a, b)=> a.id - b.id)
                     :state.allCharacters.sort((a, b)=> b.id - a.id)
                    }

        case DELETE_FAVORITE:
        return {
            ...state,
            myFavorites: payload,//state.myFavorites.filter(char=> char.id !== payload)
        }
        default:
            return state;
    }
}
export default reducer;
