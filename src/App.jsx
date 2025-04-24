import { useState } from "react"

import Perfil from "./components/perfil"
import RepoList from "./components/RepoList"

function App() {
    const [ nomeUsuario, setNomeUsuario] = useState('')
  
  return(
    <div>
      <div className="centralizaInput">
        <input className='inputUsuario'type="text" placeholder="Digite seu nome do GitHub"
        onBlur={evento => setNomeUsuario(evento.target.value)} />
        
      </div>

      {nomeUsuario.length > 5 && (
        <>
          <Perfil usuario={nomeUsuario} />
          <RepoList usuario={nomeUsuario}/>
        </>
      )}
    </div>

  )
}

export default App