import styles from './lista.module.css';
import Card from './card';
import Poke from './Poke';
import React, {useState, useEffect} from "react";

const Lista = () => {
  const [pokedex, setPokedex] = useState([]);
 

  useEffect(() =>{
    async function Requisicao(){
      const Api = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const Json = await Api.json();
      setPokedex(Json.results);
      console.log(Json);
    }
    Requisicao();

    },[])

 return (

    <div className={styles.container}>

 <div className={styles.left}>
  <Card pokemon={pokedex} />

  <div className={styles.btn}>
       <button>Anterior</button>
       <button>Próximo</button>
</div>
</div>

<div  className={styles.right}>
  
<Poke />
</div>
</div>

  )
}

export default Lista