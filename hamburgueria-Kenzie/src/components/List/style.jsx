import styled from "styled-components";

export const StyledList = styled.ul`

    padding-left: 16px;
    margin-top: 15px;

    display: flex;
    gap: 20px;

    overflow-x: auto;

    li{
        div{
            border: 2px solid var(--Gray20);
            border-radius: 5px;
            width: 300px;

            div{
                border: none;
                background-color: var(--Gray0);
                width: 100%;
                height: 150px;

                display: flex;
                justify-content: center;
            }

            h3{
                display: block;
                width: 100%;

                font-size: 1.25rem;
                font-weight: 700;

                color: var(--Gray100);

                margin-top: 25px;
                margin-left: 21px;
            }

            span{
                display: block;
                width: 100%;

                font-size: .75rem;
                font-weight: 400;

                color: var(--Gray50);

                margin-top: 15px;
                margin-left: 21px;
            }

            p{
                display: block;
                width: 100%;

                font-size: .9rem;
                font-weight: 700;

                color: var(--Color-primary);

                margin-top: 15px;
                margin-left: 21px;
            }

            button{
                font-size: .8rem;
                font-weight: 500;

                margin-top: 15px;
                margin-left: 21px;
                margin-bottom: 23px;
            }
        }}
`
