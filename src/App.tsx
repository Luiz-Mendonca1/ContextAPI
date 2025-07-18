import { useState } from 'react'
import { Alunos } from './components/Alunos'

import UserProvinder from './context/user'

function App() {
  const [nome, setNome] = useState("Carlso Edaurdo")

  return (
    <UserProvinder>
      <div>
        <h1>DEV School</h1>
        <br/>
        <hr/>

        <Alunos/>

      </div>
    </UserProvinder>
  )
}

export default App
