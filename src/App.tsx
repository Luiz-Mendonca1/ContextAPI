import { useState } from 'react'
import { Alunos } from './components/Alunos'

function App() {
  const [nome, setNome] = useState("Carlso Edaurdo")

  return (
    <div>
      <h1>DEV School</h1>
      <br/>
      <hr/>

      <Alunos alunoNome={nome} changeName={ (name: string) => setNome(name) } />

    </div>
  )
}

export default App
