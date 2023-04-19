//import React from "react"; para crear una plantilla del componente atajo: rafce
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import "../components/stylesheet/searchBar.css"

const Nav = (props) => {
    return(
        <>
           
            <div className="botones">
            <button className="boton">
                <NavLink className="linkboton"  to={"/about"}>About</NavLink>
            </button>
            <button className="boton">
                <NavLink className="linkboton" to={"/home"}>Home</NavLink>
            </button>
            <button className="boton">
                <NavLink className="linkboton" to={"/"}>LogOut</NavLink>
            </button>
            <button className="boton">
                <NavLink className="linkboton" to={"/favorites"}>Favoritos</NavLink>
            </button >
            </div>
            <div className="searchBar">
                <SearchBar onSearch={props.onSearch}/>
                </div>
                
              
             
        </>
    )
}

export default Nav

