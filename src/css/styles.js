import { styled } from "styled-components"

export const ProductsArea = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    margin-top: 30px;

    div{
        height: 320px;
        width: 250px;
        border: 1px solid rgb(194,193,193);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 5px;

    }
    
    button{
        font-size: 25px;
        background: transparent;
        border: none;
        color: crimson;
    }
`;      
