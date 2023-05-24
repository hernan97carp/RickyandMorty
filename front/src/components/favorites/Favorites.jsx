import { connect } from "react-redux";
import Card from "../Card";

function Favorites({ myFavorites, onClose }) {
  return (
    <div>
      {myFavorites?.map(({ id, name, species, image, gender }) => (
        <Card
          onClose={onClose}
          id={id}
          key={id}
          name={name}
          species={species}
          image={image}
          gender={gender}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

// import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { useState } from "react";
// import { orderCards, filterCards } from "../../redux/actions";
// import { Link } from "react-router-dom";
// import Card from "../Card";
// import "../../components/stylesheet/favorites.css";

// const Favorite = (props) => {
//   const { myFavorites } = props;
//   const dispatch = useDispatch();
//   const [aux, setAux] = useState(false);
//   const handlerOrder = (event) => {
//     dispatch(orderCards(event.target.value));
//     setAux(!aux);
//   };

//   const handlerFilter = (event) => {
//     dispatch(filterCards(event.target.value));
//   };

//   return (
//     <div className="favorite">
//       <div className="orderConteiner">
//         <select onChange={handlerOrder}>
//           <option value="order" disabled="disabled">
//             Order By
//           </option>
//           <option value="Ascedente">Ascendente</option>
//           <option value="Descendente">Descendente</option>
//         </select>
//         <select onChange={handlerFilter}>
//           <option value="filter" disabled="disabled">
//             Filter By
//           </option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Genderless">GenderLess</option>
//           <option value="unknown">unknown</option>
//         </select>
//       </div>
//       {myFavorites?.map((personaje, index) => {
//         return (
//           <Card
//             onClose={personaje.onClose}
//             key={index}
//             id={personaje.id}
//             name={personaje.name}
//             status={personaje.status}
//             species={personaje.species}
//             gender={personaje.gender}
//             origin={personaje.origin?.name}
//             image={personaje.image}
//           />
//         );
//       })}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorite);
