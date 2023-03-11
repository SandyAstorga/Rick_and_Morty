import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   
   const {onSearch} = props;
   const[character,setCharacter] = useState('')
   const handleChange = (evento) =>{
      setCharacter(evento.target.value)
   }

   return (
      <div>
      <input  className={styles.input} type='search'placeholder="Ingrese ID del 1-826" value={character} onChange={handleChange}/>
      <button className={`${styles.agregado} ${styles.listItem}`} onClick={() => onSearch(character)}>AGREGAR</button>
      </div>
   );
}
