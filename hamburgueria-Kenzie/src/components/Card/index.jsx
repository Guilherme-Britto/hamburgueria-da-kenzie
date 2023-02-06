import { AddButton } from "./Addbutton";


export function Card({ list, addToCart }) {
    return (
        <ul>
            {list.map(element => (
                <AddButton key={element.id} element={element} addToCart={addToCart} />
            ))}
        </ul>
    )
}