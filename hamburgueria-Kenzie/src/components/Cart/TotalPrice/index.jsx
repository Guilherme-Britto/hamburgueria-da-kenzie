import { StyledTotalPrice } from "../style";


export function TotalPriceRemove({ removeAllFromCart, totalPrice }) {

    return (
        <StyledTotalPrice>
            <div>
                <p>Total</p>
                <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={() => removeAllFromCart()}>Remover todos</button>
        </StyledTotalPrice>
    )
}