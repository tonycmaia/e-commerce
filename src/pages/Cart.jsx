import { useState } from "react"
import { getItem, setItem } from "../services/localStorageFuncs"
import { BsFillCartDashFill } from 'react-icons/bs'
import { ProductsArea } from "../css/styles"
import { Header } from "../components/Header"


export const Cart = () => {
    const [data, setData] = useState(getItem('carrinhoYt') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoYt', arrFilter)
    }

    return (
        <div>
            <Header />

            <ProductsArea>

                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt={e.title} />
                            <h4>{e.price}</h4>
                            <button
                                onClick={() => removeItem(e)}
                            >
                                <BsFillCartDashFill />
                            </button>
                        </div>
                    ))
                }

            </ProductsArea>

        </div>
    )
}