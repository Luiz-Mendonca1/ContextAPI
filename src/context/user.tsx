import { Children, createContext, useState } from "react";
import type { ReactNode } from "react";

interface userProviderProps{
    children: ReactNode
}

type UserContextData = {
        aluno: string
        qtdAlunos: number
        mudarNome: (nome:string)=>void
}

export const UserContext = createContext({} as UserContextData)

function UserProvinder({children}: userProviderProps){
    const [aluno, setAluno] = useState('Antonieta')
    const [qtdAlunos, setQtdAlunos] = useState(40)

    function mudarNome(nome: string){
        setAluno(nome)
    }


    return(
        <UserContext.Provider value={{aluno, qtdAlunos, mudarNome}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvinder