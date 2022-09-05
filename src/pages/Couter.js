import React, { useState, useEffect } from 'react'
import './Couter.css'

export default function Couter() {

    const [contador, setContador] = useState(0) /* ta inicializando o contador(a variavel vai começar no valor 0) o useState devolve uma função no segundo parametro feita para altera o contador O USE STATE RENDERIZA O COMPONETE DNV */

    useEffect(() => {
        console.log('renderizou')
    }, [contador]) /* recebe 2 paramentros o primeiro é uma função de callback o segundo é um array de dependencias */

    const handleOnClick = operador => {
        const novoValor = operador === '+' ? contador + 1 : contador - 1
        setContador(novoValor)
    }

    return (
        <>
            <div className='couter'>
                <span>{contador}</span>
                <button onClick={() => handleOnClick('-')}>-</button>
                <button onClick={() => handleOnClick('+')}>+</button>
            </div>
        </>
    )
}
