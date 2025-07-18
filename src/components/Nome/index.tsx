
interface NomeProps{
  nome: string;
  changeName: (name: string) => void;
}

export function Nome({ nome, changeName }: NomeProps){
  return(
    <div>
      <strong>Student: {nome}</strong>      
      <br/>
      <button onClick={ () => changeName("anderson")} >
        change name
      </button>
    </div>
  )
}