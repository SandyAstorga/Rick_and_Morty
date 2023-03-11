import { addFavorite , deleteFavorite} from '../../redux/actions';
import styles from './Card.module.css';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { useState , useEffect } from 'react';


/*export*/ function Card(props) {

   const [isFav , setIsFav] = useState(false);

   function handleFavorite(){
    if(isFav === true){
      setIsFav(false);
      props.deleteFavorite(props.id)
    }else{
      setIsFav(true);
      props.addFavorite(props)
    }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (   
      <div className={styles.contenedor}>
            <Link className={styles.etiqueta} to={`/detail/${props.id}`}> {/*{props.id} */} {props.name}</Link>
         <div >
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={`${styles.butonEstilo} ${styles.listItem}`}onClick={props.onClose}>x</button>
         <img className={styles.image}src={props.image} alt= {props.name} />
         </div> 
      </div>
   );
}

export function mapDispatchToProps(dispatch){
  return{
   addFavorite: function(character){
      dispatch(addFavorite(character))
   },
   deleteFavorite: function(id){
      dispatch(deleteFavorite(id))
   }
  }
}

export function mapStateToProps(state){
      return{
         myFavorites: state.myFavorites
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
