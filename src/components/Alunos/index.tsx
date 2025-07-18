import { Nome } from '../Nome'
import { useContext } from 'react'
import { UserContext } from '../../context/user'

export function Alunos(){
  const {qtdAlunos, mudarNome} = useContext(UserContext)

  return(
    <div>
      <h3>number of students: {qtdAlunos}</h3>
      <button onClick={()=>mudarNome('andreYoung')}>
        change name
      </button>

      <br /><br />
      <Nome/>
    </div>
  )
}