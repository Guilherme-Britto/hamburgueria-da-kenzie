
export function Card({ element, addToCart }) {

    return (
        <li>
            <div>
                <div>
                    <img className="img__container" src={element.img} alt="alimento" />
                </div>
                <h3>{element.name}</h3>
                <span>{element.category}</span>
                <p>R$ {element.price.toFixed(2)}</p>
                <button onClick={() => addToCart(element)}>Adicionar</button>
            </div>
        </li>
    )
}