import React from 'react'
import styles from './lista.module.css';


const Lista = () => {
  return (
    <div  className={styles.container}>
      
 <div  className={styles.left}>

   <div className={styles.card}>
 
    <h2>Pokemom</h2>
   
    </div>

     <div  className={styles.card}>
  
    <h2>Pokemom</h2>
   </div>
     
    </div>

  <div  className={styles.right}>

    <div  className={styles.card}>
  
    <h2>Pokemom</h2>
   </div>
 
   <div  className={styles.card}>
  
  <h2>Pokemom</h2>
 </div>
 
</div>
 </div>
  )
}

export default Lista