import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./stylesheet/detalles.css";
// const URL_Base= "https://be-a-rym.up.railway.app/api/character";
// const API_KEY="85db08eae64c.68e9903bb2065a4f0bc8";

const Detail = () => {
  const id = useParams().detailId;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          console.log(char);
          setCharacter(char);
        } else {
          alert("no hay personajes con esa ID");
        }
      })
      .catch((err) => {
        alert("no hay personajes con esa ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className="detail">
      <div className="detailConteiner">
        <img
          src={character?.image}
          alt={character?.name}
          className="imagenDetail"
        ></img>
        <h2 className="nombreDetail">{character?.name}</h2>
        <div className="detalles">
          <h2>{character?.status}</h2>
          <h2>{character?.species}</h2>
          <h2>{character?.gender}</h2>
          <h2>{character?.origin?.name}</h2>
          <h2>{character?.species}</h2>
          <h2>{character?.origin}</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;

/* //   character ?<h2>{character.name}</h2>:null
      //   <h2>{character?.name}<h2>
      // <h2>character && character.name</h2>
        /* {
         character && <div>
         <h2>{character.name}</h2>
         <h2>{character.status}</h2>

         </div>
        } */
