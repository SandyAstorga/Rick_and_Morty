import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './Nav.module.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
//Nav ahora es el padre de SearchBar

export default function Nav({onSearch}) {
   
   const navigate =useNavigate();

   function logout(){
       navigate('/')
      }
   
    return (
      <div className={styles.fondo}>
         <Link className={styles.favorites}to='/favorites'>FAVORITES</Link>
         <Link className={styles.about} to='/about'>ABOUT</Link>
         <Link className={styles.home} to='/home'>HOME</Link>
         <SearchBar onSearch={onSearch}/>
         <div className={styles.poslog}>
         <button className={styles.logout} onClick={logout} >LOGOUT</button>
         </div>
      </div>
      
    );
 }