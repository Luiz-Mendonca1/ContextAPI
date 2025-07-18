import { UserContext } from "../../context/user"
import { useContext } from "react"

export function Footer(){
    const {qtdAlunos, novoAluno} = useContext(UserContext)

    return(
        <footer>
            <hr />
            <h3>footer</h3>
            <h4>students online now: {qtdAlunos}</h4>
            <button onClick={()=>novoAluno()}>
                new student
            </button>
        </footer>
    )
}