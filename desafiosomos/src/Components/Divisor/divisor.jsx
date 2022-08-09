import {useState } from 'react'
import styles  from "./divisor.module.css";

function Divisor() {
  const [pokemon, setpokemon] = useState('')
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
 <input type= "text" onChange={(e) => setpokemon(e.target.value)}/>
  <button type='button' onClick={api}>Search</button>

  <div >
 <h3>{object.id}</h3>
  <h2>{object.name}</h2>
  <img src = {object.sprites.front_default} alt =''/>
  </div>
 </div>
 )
}
export default Divisor;
