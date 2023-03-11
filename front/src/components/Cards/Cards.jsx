import Card from './Card.jsx';
import styles from './Card.module.css'

export default function Cards(props) {
   const { characters,onClose } = props;
   return <div className={styles.conteinerprincipal}>
      {characters.map((char) => (
      <Card 
      key={char.id} 
      name ={char.name}
      species={char.species}
      gender={char.gender}
      image={char.image}
      id={char.id}
      onClose={() => onClose(char.id)}
      />))}       
      {/* Renderizar  */}
   </div>;
}
