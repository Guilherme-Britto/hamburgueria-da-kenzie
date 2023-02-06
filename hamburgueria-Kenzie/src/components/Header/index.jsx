import { useState } from "react"

export function Header({ setSerch }) {
    const [serchValue, setSerchValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
        setSerch(serchValue)
        setSerchValue("")
    }

    return (
        <header>
            <h1><b>Burguer</b>Kenzie</h1>
            <form>
                {/* <input type="text" value={serchValue} onChange={(e) => e.target.value} /> */}
                <button type="submit">Pesquisar</button>
            </form>
        </header>
    )
}