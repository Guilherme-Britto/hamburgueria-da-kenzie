import { useState } from "react"

export function Header({ setSearch }) {
    const [searchValue, setSearchValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
        setSearch(searchValue)
        setSearchValue("")
    }

    return (
        <header>
            <h1><b>Burguer</b>Kenzie</h1>
            <form onSubmit={submit}>
                <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
                <button type="submit">Pesquisar</button>
            </form>
        </header>
    )
}