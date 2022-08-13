import {useState} from 'react'
import styles from './section.module.css';

function Section() {
  const [pokemon, setPoke] = useState('')
 
  const [object,setObject] = useState([])
 
  const api = ()=> {
    const url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`
    fetch(url)
    .then((res) => res.json())
    .then((result) =>{
      setObject(result)
    });
  }
return (
<div className='App' >
 <input type='text'  onChange={(e) => setPoke(e.target.value)}/>
  <button type='button' onClick={api}>Busque um Pokemon</button>

 <div>
 <h1 className={styles.nome}>{object.name}</h1>
 <h3>{object.id}</h3>
 <h3>{object.stats[0].stat.name}</h3>
 <h3> {object.types[0].type.name}</h3>
 <h3> {object.stats[0].base_stat}</h3>
 <img src = {object.sprites.front_default} alt =''/>
 </div>
</div>
 )
}
export default Section;
