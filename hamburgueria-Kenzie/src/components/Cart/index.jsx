import { CartCard } from "./CartCard"
import { TotalPriceRemove } from "./TotalPrice"


export function Cart({ cartList, removeFromCart, removeAllFromCart, totalPrice }) {
    return (
        <aside>
            <div>
                <h3>Carrinho de compras</h3>
            </div>
            {cartList.length == 0 ?
                <>
                    <p>Sua sacola está vazia</p>
                    <span>Adicione itens</span>
                </> :
                <>
                    <ul>
                        {cartList.map(element => (
                            <CartCard key={element.uuid} element={element} removeFromCart={removeFromCart} />
                        ))}
                    </ul>
                    <TotalPriceRemove removeAllFromCart={removeAllFromCart} totalPrice={totalPrice}/>
                </>
            }
        </aside>
    )
}

