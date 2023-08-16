import React, { useState } from "react";
import { setItem } from "../services/localStorageFuncs";

export const Login = (props)=>{
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
        

    const cond = (name.length > 3 && pass.length > 5)

    const saveUser = (name, pass)=>{
        setItem('usuario',{name, pass})
        const { history: {push}} = props;
        push('/store')
    }

    return (
        <div>
            <p>Nome</p>
            <input 
            type="text"
            onChange={({target:{value}})=> setName(value)}
            value={name}
            />
            <p>Password</p>
            <input 
            type="password"
            onChange={({target:{value}})=> setPass(value)}
            value={pass} />
            <br />
            <br />
            <button
            type="button"
            onClick={()=> saveUser(name, pass)}
            disabled={ !cond }>
                Sing in
            </button>
        </div>
    )
}