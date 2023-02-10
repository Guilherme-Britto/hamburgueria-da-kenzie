import styled from "styled-components";

export const StyledSearch = styled.div`

display: flex;
justify-content: space-between;
align-items: center;

margin-top: 30px;
margin-bottom: 25px;
padding: 0 16px;

@media(min-width: 769px){
    max-width: 955px;
    margin-top: 5px;
}

h2{
    font-size: 1.4rem;
    font-weight: 700;

    color: var(--Gray100);
}

span{
    color: var(--Gray50);
}

button{
    background-color: var(--Color-primary);
    color: var(--WhiteFixed);

    border-radius: 8px;
    width: 107px;
    height: 40px;

    font-size: .8rem;
    font-weight: 500;

    margin-top: 15px;
    margin-left: 21px;
    margin-bottom: 23px;

    &:hover{
        background-color: var(--Color-primary-50);
    }
}
`

export const StyledMain = styled.main`

    @media(min-width: 769px){
        display: flex;
        max-width: 1400px;
    }
`
export const StyledPageWidth = styled.div`

    @media(min-width: 769px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`