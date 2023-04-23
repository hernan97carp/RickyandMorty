
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types"
import axios from "axios";
export const addFavorite = (character)=>{
    return function(dispatch) {
        axios.post("hhtp://localhost:3001/rickandmorty/favs", character)
        .then(response => {
            return dispatch({
                type: ADD_FAVORITE,
                payload: response.data,
            })
        })
    }
}

export const deleteFavorite = (id)=>{
    return function(dispatch){
        axios(`hhtp://localhost:3001/rickandmorty/favs/${id}`,)
        .then((response) => {
            return dispatch({
                type: DELETE_FAVORITE,
                payload: response.data,
            })
        })    
    }   
   
}
export const filterCards= (gender)=>{
    return{ type:FILTER, payload: gender}
}
export const orderCards = (id)=>{
    return{ type:ORDER, payload: id}
}

