import { CartCard } from "./CartCard"
import { StyledCart, StyledCartInfo } from "./style"
import { TotalPriceRemove } from "./TotalPrice"


export function Cart({ cartList, removeFromCart, removeAllFromCart, totalPrice }) {
    return (
        <StyledCart>
            <>
                <h2>Carrinho de compras</h2>
            </>
            <StyledCartInfo>
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
                    </>
                }
            </StyledCartInfo>
            {cartList.length == 0? <></>:
            <TotalPriceRemove removeAllFromCart={removeAllFromCart} totalPrice={totalPrice} />
            }
        </StyledCart>
    )
}
