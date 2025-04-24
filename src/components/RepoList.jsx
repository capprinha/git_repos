import { useEffect, useState } from "react"
import styles from './RepoList.module.css'

function RepoList({ usuario }){

    
    const[repos, setRespos] = useState([]);
    const[ estaCarregando, setEstaCarregando ] = useState(true)

    async function pegaApi(){
        const res = await fetch(`https://api.github.com/users/${usuario}/repos`)
        if(res.status === 200){
            const resJson = await res.json()
            setRespos(resJson)
            console.log('deu bom ')
        }else{
            console.error('deu ruim na api')
        }
    }
    useEffect(()=>{
        // fetch('https://api.github.com/users/capprinha')
        // .then(res => res.json())
        // .then(resJson => {
        //     console.log(resJson)
        // })
        setTimeout(()=>{
            setEstaCarregando(false)
            pegaApi()
        },2000)
        console.log('mont ListRespo')
    }, [usuario])

    return(
        <div className="container-back-color">
            {estaCarregando ? (
                <h1 className={styles.carregando}>Carregando...</h1>
            ):(
                <div className="container">
                <ul className={styles.list}>
                {repos.map(repositorios =>(
                    <li className={styles.listItem} key={repositorios.id}>
                        <div className={styles.listItemName}>
                            <b>Nome: </b> {repositorios.name} 
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguage: </b> {repositorios.language} 
                        </div>
                        <a className={styles.listItemLink} href={repositorios.html_url}>Visitar no GitHub</a>
                    </li>
                ))}
                </ul>
            </div>

            )}
        </div>
    )
}

export default RepoList