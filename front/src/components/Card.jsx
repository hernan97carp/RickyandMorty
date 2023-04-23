import React from "react";
import { NavLink } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./stylesheet/tarjeta.css"
// const Card = (props) => {    // y con las propiedades con el pros.  por ej props.name  props.status

function Card ({id,name,status,species,gender,origin,image,onClose}){   
   
   const [isFav, setIsFav] = useState(false);
const dispatch = useDispatch();
const myFavorites = useSelector(state=> state.myFavorites)

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   function handleFavorite(){
   if(isFav){
      setIsFav(false);
      //le pasamos el id del personaje
      dispatch(deleteFavorite(id))
   }
   else {
      setIsFav(true);
      dispatch(addFavorite({id,name,status,species,gender,origin,image,onClose}))
      
   }
   }
   

   
   
   return (
      <div className="tarjetas">

         <div className="cajadeboton">
         <button className="eliminar" onClick={() => onClose(id)}>X</button>
         </div>


       <div className="linkcaja"><NavLink className="link" to={`/detail/${id}`}><h2>{name}</h2></NavLink>
       </div>  
       
       <img className="imagen" src={image} alt='Imagen del personaje' />
   
        <div className="datos"> <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <h2>{status}</h2>
         <h2>{name}</h2>
         <h2>{id}</h2>
         </div>
         <div>
         {
   isFav ? (
      <button className="botonCorazon"onClick={handleFavorite}>❤️</button>
   ) : (
      <button className="botonCorazon "onClick={handleFavorite}>🤍</button>
   )
}
         </div>
      </div>
 
   );
}



export default Card;