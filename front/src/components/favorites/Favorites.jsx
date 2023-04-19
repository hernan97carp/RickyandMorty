
import { useDispatch, useSelector } from "react-redux"
import { orderCards, filterCards } from "../../redux/actions"
import { Link } from "react-router-dom"

import "../stylesheet/cards.css"
import "../stylesheet/detalles.css"
import "../stylesheet/tarjeta.css"
const Favorites = ()=>{
    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch();

  const handlerOrder = (event)=>{
    dispatch(orderCards(event.target.value))
 
  }

  const handlerFilter= (event)=>{
    dispatch(filterCards(event.target.value))
  }


    return(
        <div>
          <div>
              <select onChange={handlerOrder}>
          <option value="order" disabled="disabled">Order By</option>
           <option value="Ascedente">Ascendente</option>
           <option value="Descendente">Descendente</option>
              </select>
              <select onChange={handlerFilter}>
              <option value="filter" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">GenderLess</option>
                <option value="unknown">unknown</option>
              </select>
            

          </div>

        {
            myFavorites.map((character)=>{
                return(
                    <div>
                 
              <div className="tarjetas">
    
       <div className="link"><Link to={`/detail/${character.id}`}><h2>{character.name}</h2></Link>
       </div>  
       <img className="imagen" src={character.image} alt='Imagen del personaje' />
        <div className="datos"> <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin.name}</h2>
         </div>
          </div>

                    </div>
                )
            })
        }

        </div>
    )
}
export default Favorites