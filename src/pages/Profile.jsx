import React from "react";
import { getItem } from "../services/localStorageFuncs";



export const Profile = (props) => {
    const user = getItem('usuario')

    const toProfileEdit = () => {
        const { history: { push } } = props;
        push('profile/edit')
    }

    return (
        <div>
            <p>Nome:{user.name}</p>
            <p>E-mail:{user.email}</p>
            <p>CPF:{user.cpf}</p>
            <img sizes="40" src={user.img} alt={user.name} />
            <br />
            <br />
            <button
                onClick={toProfileEdit}
            >
                Edit Profile
            </button>
        </div>


    )
}