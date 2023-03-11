import React from "react";
import styles from './About.module.css'

export default function About(){
    return(
    <div className={styles.lyrics} >
        <h1>
            Rick and Morty App
        </h1>
        <h6 className={styles.lyrics2}>Creado por: Sandy Astorga</h6>
    </div>
    )
}