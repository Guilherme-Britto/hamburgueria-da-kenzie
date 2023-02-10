import { useState } from "react"
import { StyledHeaderr } from "./style"

export function Header({ setSearch }) {
    const [searchValue, setSearchValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
        setSearch(searchValue)
    }

    return (
        <StyledHeaderr>
            <h1><b>Burguer</b>Kenzie</h1>
            <form onSubmit={submit}>
                <input type="text" placeholder="Digitar Pesquisa" onChange={(e) => setSearchValue(e.target.value)} />
                <button type="submit">Pesquisar</button>
            </form>
        </StyledHeaderr>
    )
}