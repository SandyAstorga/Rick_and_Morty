import './App.css'
import React from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import { useState , useEffect } from 'react'
import {Routes , Route , useLocation , useNavigate} from 'react-router-dom'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'

function App () {
  
  const location = useLocation();
  const navigate = useNavigate();
  const[characters,setCharacters] = useState ([]);
  const [access , setAccess ] = useState(false);
  let username = 'sandyastorga13@gmail.com';
  let password = 'effort13';

  function login(userData) {
    if (userData.username === username && userData.password === password) {
       setAccess(true);
       navigate('/home');
    }
    else{
      alert('usuario o contraseña incorrectas')
    }
 }

 useEffect(() => {
  !access && navigate('/');
 }, [access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose =(id) => {
  setCharacters(characters.filter(char => char.id !== id))
 };

 return (
    <div className='App' style={{ padding: '20px' }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/> }
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/> 
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App
