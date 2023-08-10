import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'

export const Store = () => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    console.log(data)
    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular';
            const response = await fetch(url)
            const objJson = await response.json()
            setData(objJson.results)
        }
        fetchApi();
    }, [])

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if (element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
        } else {
            setCart([...cart, obj])
        }

    }

    return (
        <div>
            <h1>STORE</h1>
            <div>
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt="" />
                            <h4>{e.price}</h4>
                            <button onClick={handleClick(e)} >
                                {
                                    cart.some((itemCart) => itemCart.id === e.id) ? (
                                        <BsFillCartCheckFill />)
                                        : (
                                            <BsFillCartPlusFill />
                                        )
                                }
                            </button>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}