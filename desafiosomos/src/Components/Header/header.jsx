import React from "react";
import styles from "./header.module.css";

const  Header =() =>{
    return(
        <header>
            <div>
<img alt="PokéAPI" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"className={styles.poke}/>
            
            </div>
        
        </header>   
    )
}
export default Header