import React from "react";
import { Link } from 'react-router-dom'
import { styled } from "styled-components";
import { getItem } from "../services/localStorageFuncs";

const HeaderArea = styled.div`
    display: flex;
    
    align-items: end;
    justify-content: end;
    gap: 50px;
    background-color: crimson;
    padding: 20px;
    margin-bottom: 30px;

    a{
        text-decoration: none;
        color: white;
        font-weight: bolder;
        cursor: pointer;
        
        &:hover{
            text-decoration: underline;
        }

    }
`

export const Header = () => {
    const cond = getItem('usuario')

    return (
        <HeaderArea>
            <Link to='/' >Store</Link>
            <Link to='/cart' >Carrinho</Link>
            <Link to={( (cond.name === '') ?'': '/profile') }>My Profile</Link>
        </HeaderArea>
    )
}