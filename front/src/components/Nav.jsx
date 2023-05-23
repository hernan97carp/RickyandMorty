//import React from "react"; para crear una plantilla del componente atajo: rafce
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "../components/stylesheet/searchBar.css";

const Nav = (props) => {
  return (
    <>
      <div className="botonesConteiner">
        <NavLink className="linkboton" to={"/"}>
          <button className="boton">LogOut</button>
        </NavLink>

        <NavLink className="linkboton" to={"/home"}>
          <button className="boton">Home</button>
        </NavLink>

        <NavLink className="linkboton " to={"/about"}>
          <button className="boton">About</button>
        </NavLink>

        <NavLink className="linkboton" to={"/favorites"}>
          <button className="boton">Favorite</button>
        </NavLink>
      </div>

      <div className="searchBar">
        <SearchBar onSearch={props.onSearch} />
      </div>
    </>
  );
};

export default Nav;
