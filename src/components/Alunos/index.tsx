import { Nome } from '../Nome'

interface AlunosProps{
  alunoNome: string;
  changeName: (name: string) => void;
}

export function Alunos({ alunoNome, changeName}: AlunosProps){
  return(
    <div>
      <h3>number of students: 24</h3>
      <Nome nome={alunoNome} changeName={changeName} />
    </div>
  )
}