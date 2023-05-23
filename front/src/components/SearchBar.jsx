import { useState } from "react";
import "./stylesheet/searchBar.css";

const SearchBar = (props) => {
  // tb puedo usar props y en la variable props.onSearch
  const { onSearch, onSearchRandom } = props;
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className="menuDeNavegacion">
      <header className="header">
        <input
          className="input"
          type="search"
          value={id}
          onChange={handleChange}
          placeholder="write a number..."
        />
        <button
          className="ov-btn-grow-box"
          onClick={() => {
            onSearch(id);
            setId("");
          }}
        >
          push
        </button>{" "}
        {/*//cuando necesito pasar un argumento a una funcion tengo q hacerlo con un cb, sino se va a ejecutar la funcion*/}
      </header>
    </div>
  );
};

export default SearchBar;
