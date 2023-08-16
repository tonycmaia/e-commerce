import React, { useState } from "react";

export const ProfileEdit = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [img, setImg] = useState('')
    const [cpf, setCpf] = useState('')

    const cond = (
        name.length > 3
    )

    return (
        <div>
            <p>Nome</p>
            <input type="text"
                value={name}
                onChange={({ target: { value } }) => setName(value)} />

            <p>E-mail</p>
            <input type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
            />

            <p>Password</p>
            <input type="password"
                value={pass}
                onChange={({ target: { value } }) => setPass(value)}
            />

            <p>Imagem</p>
            <input type="text"
                value={img}
                onChange={({ target: { value } }) => setImg(value)}
            />

            <p>CPF</p>
            <input type="number"
                value={cpf}
                onChange={({ target: { value } }) => setCpf(value)}
            />


        </div>

    )
}