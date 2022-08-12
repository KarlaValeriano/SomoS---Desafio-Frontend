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
 <img src = {object.sprites.front_default} alt =''/>
 <h3>{object.id}</h3>
 <h3>{object.name}</h3>

 </div>

 
</div>

  )
}

export default Section;
