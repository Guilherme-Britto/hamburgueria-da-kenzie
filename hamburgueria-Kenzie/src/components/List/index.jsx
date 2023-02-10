import { Card } from "./Card";
import { StyledList } from "./style";


export function List({ list, addToCart }) {
    return (

        <StyledList>
            {list.map(element => (
                <Card key={element.id} element={element} addToCart={addToCart} />
            ))}
        </StyledList>
    )
}