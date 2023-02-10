import { StyledCartCard, StyledCartCardInfo } from "../style";

export function CartCard({ element, removeFromCart }) {

    return (
        <li>
            <StyledCartCard>
                <StyledCartCardInfo>
                    <img src={element.img} alt="alimento" />
                    <div>
                        <h3>{element.name}</h3>
                        <span>{element.category}</span>
                    </div>
                </StyledCartCardInfo>
                <button onClick={() => removeFromCart(element.id)}>Remover</button>
            </StyledCartCard>
        </li>
    )
}
