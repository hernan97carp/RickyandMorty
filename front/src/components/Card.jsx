import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./stylesheet/tarjeta.css";
// const Card = (props) => {    // y con las propiedades con el pros.  por ej props.name  props.status

function Card(props) {
  const {
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    id,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      //le pasamos el id del personaje
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };
  return (
    <div className="tarjetas">
      <div className="cajadeboton">
        <button className="eliminar" onClick={() => onClose(id)}>
          X
        </button>
      </div>

      <div className="linkcaja">
        <NavLink className="link" to={`/detail/${id}`}>
          <h2>{name}</h2>
        </NavLink>
      </div>
      <div className="conteinerImagens">
        <img className="imagen" src={image} alt="Imagen del personaje" />
      </div>
      <div className="datos">
        {" "}
        <h2>{gender}</h2>
        <h2>{origin?.name}</h2>
        <h2>{status}</h2>
        <h2>{name}</h2>
        <h2>{id}</h2>
      </div>
      <div>
        {isFav ? (
          <button className="botonCorazon" onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className="botonCorazon " onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje) => dispatch(addFav(personaje)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
