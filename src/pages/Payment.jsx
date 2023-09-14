import { useState } from "react"
import { getItem } from "../services/localStorageFuncs"
import { AiFillCheckCircle } from "react-icons/ai"
import styled from "styled-components"
import { Loading } from "../components/Loading"

const PaymentArea = styled.div`
    span{
        font-size: 40px;
        color: green;
    }
`
export const Payment = (props) => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2500)

    const { params: { price } } = props.match
    const user = getItem('usuario')
    return (
        <>
            {
                loading ? <Loading /> : (
                    <PaymentArea>
                        <h2>Sua compra foi concluída com sucesso</h2>
                        <span><AiFillCheckCircle /></span>
                        <h4>{`Valor: R$${price}`}</h4>
                        <h4>{`Comprador: ${user.name}`}</h4>
                        <h4>{`Prazo de entrega: ${Math.ceil(Math.random() * 20) + 1} dias`}</h4>
                    </PaymentArea>

                )
            }
        </>
    )
}