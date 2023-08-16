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
            <p>{user.name}</p>
            <button
                onClick={toProfileEdit}

            >
                Edit Profile
            </button>
        </div>


    )
}