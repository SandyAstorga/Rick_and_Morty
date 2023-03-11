import React from "react";
import styles from './Form.module.css';
import validation from './Validation.js';

export default function Form(props){

  const [userData, setUserData] = React.useState({ 
    username: '', 
    password: '' 
  });

  const [errors, setErrors] = React.useState({ 
    username: '', 
    password: '' 
  });
 
  const handleInputChange = (evento) => {
    setUserData({
        ...userData,
        [evento.target.name]: evento.target.value
    })
    setErrors(validation({
        ...userData,
        [evento.target.name]: evento.target.value
    }))
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()
    props.login(userData)
   }
  
  return(
  <div className={styles.fondo} >
    <form onSubmit={handleSubmit}>
      <div className={styles.contenedor}>
    <label htmlFor='username' className={styles.etiqueta}>Username:</label>
    <input className={styles.input}
      id='username' 
      name='username'  
      placeholder="Ingrese el usuario..." 
      type='text' 
      value={userData.username}
      onChange={handleInputChange}
      />
    <p>{errors.username}</p>
    <label htmlFor='password' className={styles.etiqueta}>Password: </label>
    <input className={styles.input}
      id='password' 
      name='password' 
      type='password'
      placeholder="Ingrese la contraseña..."
      value={userData.password}
      onChange={handleInputChange}
    />
    <p>{errors.password}</p>
    <button className={`${styles.boton} ${styles.boton}`}>LOGIN</button>
    </div>
    </form>
  </div>
 )
}