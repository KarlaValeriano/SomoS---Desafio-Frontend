import React from 'react'
import styles from './lista.module.css';

const Card = ({pokemon}) => {
  console.log(pokemon);

  return (
    <div>
      {
        pokemon?.map((item)=>{
          return(
            <div className={styles.card}>
            <h2>{item.name}</h2>
        
          </div>

          )
        }
)
      }
         
   </div>
  )
}

export default Card