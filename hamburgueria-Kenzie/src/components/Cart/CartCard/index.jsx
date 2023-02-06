
export function CartCard({ element, removeFromCart }) {

    return (
        <li>
            <img src={element.img} alt="alimento" />
            <h2>{element.name}</h2>
            <span>{element.category}</span>
            <button onClick={() => removeFromCart(element.id)}>Remover</button>
        </li>
    )
}
