import styled from "styled-components";

export const StyledCart = styled.aside`

    margin: 0 16px;
    margin-top: 20px;



    h2{
        display: flex;
        align-items: center;

        font-size: 1.25rem;
        font-weight: 700;

        background-color: var(--Color-primary);
        color: var(--WhiteFixed);

        height: 65px;
        border-radius: 8px 8px 0 0;
        padding-left: 20px;
    }
`
export const StyledCartInfo = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: auto;

    background-color: var(--Gray0);

    border-radius: 0 0 8px 8px;

    max-height: 250px;

    p{
        font-size: 1.2rem;
        font-weight: 700;

        margin-top: 55px;

        color: var(--Gray100);
    }

    span{
        font-size: .8rem;
        font-weight: 400;

        margin-top: 20px;
        margin-bottom: 40px;

        color: var(--Gray50);
    }

    ul{
        width: 100%;
        padding-top: 20px;
    }

    li{
        width: 100%;
        padding-bottom: 20px;
    }

`

export const StyledCartCard = styled.div`

    height: 80px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        margin-right: 10px;

        background-color: inherit;
        color: #BDBDBD;
    }
`

export const StyledCartCardInfo = styled.div`

    display: flex;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        height: 80px;
        padding-left: 10px;
    }

    img{
        height: 80px;

        border-radius: 5px;
        margin-left: 10px;

        background-color: var(--Gray20);
    }

    span{
        margin: 0;
    }

    h3{
        font-size: .9rem;
        font-weight: 700;
    }

`
export const StyledTotalPrice = styled.section`

background-color: var(--Gray0);

border-top: 2px solid var(--Gray20);
padding: 14px 10px 20px 10px;

border-radius: 0 0 8px 8px;

div{
    display: flex;
    justify-content: space-between;
}

    p{
        color: var(--Gray100);
        font-weight: 700;
    }

    span{
        color: var(--Gray50);
        font-weight: 600;
    }

    button{
        width: 100%;
        max-width: 400px;
        height: 60px;

        display: block;

        margin: 0 auto;

        font-weight: 600;

        margin-top: 22px;

        background-color: var(--Gray20);

        color: var(--Gray50);
    }
`

