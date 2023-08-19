import React, { useState } from "react";
import { getItem, setItem } from "../services/localStorageFuncs";

export const ProfileEdit = (props) => {
    const user = getItem('usuario')

    const [name, setName] = useState(user.name || '')
    const [email, setEmail] = useState(user.email || '')
    const [pass, setPass] = useState(user.pass || '')
    const [img, setImg] = useState(user.img || '')
    const [cpf, setCpf] = useState(user.cpf || '')

    const cond = (
        name.length > 3 && (email.includes("@") && email.length > 5)
        && pass.length > 5 && img.length > 4 && cpf.length === 11
    )

    const saveChanges = () => {
        setItem('usuario', { name, email, pass, img, cpf })
        const { history: { push } } = props;
        push('/profile')
    }


    return (
        <div>
            <p>Nome:{user.name}</p>
            <input type="text"
                value={name}
                onChange={({ target: { value } }) => setName(value)} />

            <p>E-mail:{user.email}</p>
            <input type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
            />

            <p>Password</p>
            <input type="password"
                value={pass}
                onChange={({ target: { value } }) => setPass(value)}
            />

            <p>Imagem:
                <img src={user.img} alt="" /> </p>
            <input type="text"
                value={img}
                onChange={({ target: { value } }) => setImg(value)}
            />

            <p>CPF: {user.cpf}</p>
            <input type="number"
                value={cpf}
                onChange={({ target: { value } }) => setCpf(value)}
            />
            <br /> <br /> <br />
            <button
                onClick={saveChanges}
                disabled={!cond}
            >
                Save
            </button>


        </div>

    )
}