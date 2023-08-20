import React, { useState } from "react";
import { setItem, getItem } from "../services/localStorageFuncs";

export const Login = (props) => {
    const user = getItem('usuario')

    const [name, setName] = useState(user.name || '')
    const [pass, setPass] = useState(user.pass || '')
    const [passIncorrect, setPassIncorrect] = useState(false)


    const cond = (name.length > 3 && pass.length > 5)

    const saveUser = (name, pass) => {
        const { history: { push } } = props;
        if (name === user.name && pass === user.pass) {
            push('/store')
            return;
        } else if (name === user.name && pass !== user.pass) {
            setPassIncorrect(true)
            return;
        }

        setItem('usuario', { name, pass })
        push('/store')
    }

    return (
        <div>
            <p>Nome</p>
            <input
                type="text"
                onChange={({ target: { value } }) => setName(value)}
                value={name}
            />
            <p>Password</p>
            <input
                type="password"
                onChange={({ target: { value } }) => setPass(value)}
                value={pass} />
            {
                passIncorrect && <p>Incorrect password</p>
            }
            <br />
            <br />
            <button
                type="button"
                onClick={() => saveUser(name, pass)}
                disabled={!cond}>
                Sing in
            </button>
        </div>
    )
}