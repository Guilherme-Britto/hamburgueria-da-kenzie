
export function AddButton({element, addToCart}){

    return(
        <li>
            <img src={element.img} alt="alimento" />
            <h2>{element.name}</h2>
            <span>{element.category}</span>
            <p>R$ {element.price.toFixed(2)}</p>
            <button onClick={() => addToCart(element)}>Adicionar</button>
        </li>
    )
}