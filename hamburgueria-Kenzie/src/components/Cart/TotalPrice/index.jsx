

export function TotalPriceRemove({ removeAllFromCart, totalPrice }) {

    return (
        <div>
            <div>
                <p>Total</p>
                <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={() => removeAllFromCart()}>Remover todos</button>
        </div>
    )
}