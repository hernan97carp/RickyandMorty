import {useState} from "react";
import "./stylesheet/searchBar.css"

const SearchBar = ({onSearch})=> {   // tb puedo usar props y en la variable props.onSearch
   
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className="menuDeNavegacion">
         <header className="header">
         <input  className="input" type='search' value={id} onChange={handleChange} placeholder="Numero del personaje..." />
        
         <button className="ov-btn-grow-box" onClick= {() => {onSearch(id); setId('')}}>Agregar</button>  {/*//cuando necesito pasar un argumento a una funcion tengo q hacerlo con un cb, sino se va a ejecutar la funcion*/}
      
       </header>
         
   
   
   </div>)
   ;
}

export default SearchBar
