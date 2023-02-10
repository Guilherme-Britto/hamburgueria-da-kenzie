import styled from "styled-components";

export const StyledHeaderr = styled.header`

    box-sizing: border-box;
    background-color: var(--Gray0);
    height: 139px;
    width: 100%;
    padding: 14px 0;

    h1{
        width: 100%;
        line-height: 2rem;

        text-align: center;
        font-weight: 700;

        color: #EB5757;

        b{
            font-size: 1.5rem;
            color: #333333;

            padding-right: 5px;
        }
    }

    form{
        margin: 0 16px;
        margin-top: 10px;
        height: 60px;

        background-color: var(--WhiteFixed);
        border: 2px solid var(--Gray20);
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover{
            border: 1px solid var(--Gray100);
        }

        input{
            width: 60%;
            height: 100%;
            border: none;
            border-radius: 8px;
            padding: 0;
            padding-left: 15px;

            font-size: 1rem;

            &:focus{
                border: none;
            }
        }

        input::placeholder{
            color: var(--Gray20);
            font-weight: 400;
            font-size: 1rem;
        }


        button{
            margin-right: 15px;
        }
    }

    @media(min-width: 768px){

        display: flex;
        align-items: center;

        height: 80px;

        h1{
            text-align: start;
            padding-left: 16px;
        }

        form{
            margin: 0;

            width: 365px;
        }
    }
`