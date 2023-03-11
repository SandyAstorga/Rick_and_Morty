import React from "react";
import { connect } from "react-redux";
import Card from "../Cards/Card";
import styles from './favorites.module.css'


function Favorites ({myFavorites}){
    return (
    <div className={styles.espacio}>   
    {myFavorites?.map((char) => (
      <Card
      key={char.id} 
      name ={char.name}
      image={char.image}
      />))}       
    </div>
    )
}

export function mapStateToProps(state){
    return{
       myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites);