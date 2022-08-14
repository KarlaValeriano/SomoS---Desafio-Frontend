import React from 'react'
import styles from './lista.module.css';

const Lista = () => {
  return (
    <div className={styles.container}>
      
 <div className={styles.left}>
   <div className={styles.card}>
       <h2>Pokemon</h2>
   </div>
   
 </div>

<div  className={styles.right}>
     <div className={styles.card}>
           <h2>Pokemon</h2>
     </div>
</div>

<div className={styles.btn}>
  <button>Anterior</button>
  <button>Próximo</button>
</div>



 <div className={styles.itens}>
 <h1>Pokemon</h1>
 <img/>
 <div className={styles.habilidades}>
    <h2>1</h2>
    <h2>1</h2>
    <h2>1</h2>
    <h2>1</h2>
    </div>
  </div>

 </div>
  )
}

export default Lista