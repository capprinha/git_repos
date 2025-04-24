import { useEffect } from 'react'
import styles from './Perfil.module.css'

function Perfil({usuario}){

    useEffect(()=>{
        console.log("Perfil mont")
    },[])
    return(

        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${usuario}.png`} />
            <h1 className={styles.name}>{usuario}</h1>
        </header>
    )
}

export default Perfil