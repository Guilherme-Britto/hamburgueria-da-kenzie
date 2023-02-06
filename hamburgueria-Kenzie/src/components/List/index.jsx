import { Card } from "./Card";


export function List({ list, addToCart }) {
    return (
        <ul>
            {list.map(element => (
                <Card key={element.id} element={element} addToCart={addToCart} />
            ))}
        </ul>
    )
}