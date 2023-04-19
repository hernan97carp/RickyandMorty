import './App.css';
import Form from './components/Form';
import Nav from './components/Nav'; 
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from "./components/About";
import Detail from "./components/Detail";
import Favorites from './components/favorites/Favorites';


//"https://be-a-rym.up.railway.app/api/character";

// const API_KEY="85db08eae64c.68e9903bb2065a4f0bc8";

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] =  useState(false); 
   const username= "hernan@hotmail.com";
   const password= "123asd!";
   const login = (userData)=>{
      if(userData.username === username && userData.password === password){
         setAccess(true)
         navigate("/home") //loredirigimos a home si coincide todo

      }
   } 
   useEffect(()=>{
    !access && navigate("/")
   }, [access])

   const onSearch= (id) => { 
      //`${URL_Base}/${id}?key=${API_KEY}`
      const URL_Base= "http://localhost:3001/rickandmorty/character"
   //   fetch(`${URL_Base}/character/${id}`)
   //   .then((response)=> response.json())
   //   .then((data)=>{
   //    if(data.name){
   //       setCharacters((oldChars)=>[...oldChars, data])
   //    } else{
   //       alert("algo salio mal")
   //    }
   //   })

      axios(`${URL_Base}/${id}`)
      .then(response => response.data)
      .then(( data ) => { 
         console.log(data)       // axios me da un objeto gigante, hacemos destructuring y la response esta en data. o hacemos un then mas y no lo ponemos entre llaves
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
     
      const charsFiltered = characters.filter(character => Number(character.id) !== Number(id))
      console.log(charsFiltered)
      setCharacters(charsFiltered)

   }

   return (
      <div className='App'>
        {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch}/>}     
         <Routes>
         <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>}/>
         <Route path="/about" element={<About/>}/> 
         <Route path="/detail/:detailId" element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
         </Routes>

      </div>
   );
}

export default App;
