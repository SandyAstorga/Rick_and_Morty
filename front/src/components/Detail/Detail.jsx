// import React from "react";
import { useState , useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import styles from './Detail.module.css'

export default function Detail() {
    const { detailId } = useParams();
    const navigate  = useNavigate();
    const [character , setCharacter] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

     const handleClick = () => {
      navigate('/home')
     }

    return (
    <div className={styles.espacio}>
        <button className={styles.gohome} onClick={handleClick}>GO HOME</button>
      {character ? (
       <div>
        <div className={styles.letras}>
          <h2>{character.name}</h2>
          <h5>{character.status}</h5>
          <h5>{character.species}</h5>
          <h5>{character.gender}</h5>
          <h5>{character.origin?.name}</h5>
          <h5>{character.name}</h5>
        </div>
        <div>
            <img  className={styles.imagen} src={character.image} alt={character.name}/>
        </div>
        </div>
        ) : (
         ""
        )}
        </div>
    ); 
}