import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";
import axios from "axios";





export function addFavorite(character) {
  return async function (dispatch) {
    try {
      const resultado = await axios.post(
        "http://localhost:3001/rickandmorty/favs",
        character
      );
      dispatch({
        type: ADD_FAVORITE,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


// export function deleteFavorite(id){
// return async function(dispatch){
// try{
//  const resultado = await axios.delete("http://localhost:3001/rickandmorty/favs/" + id)
// dispatch({
// type: DELETE_FAVORITE,
// payload: resultado.data,

// })
// }catch(error){
//   console.log(error)
//     }
//   }
// }




export const deleteFavorite =(id) => {
  const endpoint = "http://localhost:3001/rickandmorty/favs/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETE_FAVORITE,
        payload: data,
      });
    });
  };

};


export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};







// return async(dispatch)=>{
// try{
//  const result = await axios.delete("http://localhost:3001/rickandmorty/favs/" + id)
// return dispatch({
//   type: DELETE_FAVORITE,
//   payload: id,
// })
// }catch(error){
// console.log(error)

// }


// }


  // const endpoint = "http://localhost:3001/rickandmorty/favs/" + id;
  // return (dispatch) => {
  //   axios.delete(endpoint).then(({ data }) => {
  //     return dispatch({
  //       type: DELETE_FAVORITE,
  //       payload: data,
  //     });
  //   });
  // };

















// export function addfavorite(character){
// //    return async function(dispatch){
// //  try{
// //    const resultado = await axios.post("http://localhost:3001/rickandmorty/favs", character)
// // dispatch({
// // type: ADD_FAVORITE,
// // payload: resultado.data

// // })

// //  }catch(error){
// //    console.log(error)
// //  }

// //    }
// // }

// export const addFavorite = (character)=>{
//    const endpoint = 'http://localhost:3001/rickandmorty/favs';
//    return (dispatch) => {
//       axios.post(endpoint, character)
//       .then(({ data }) => {
//          return dispatch({
//             type: ADD_FAVORITE,
//             payload: data,
//          });
//       });
//    };
// }
