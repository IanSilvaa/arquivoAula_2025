
import React, { useState } from 'react'
import './Demo2.css'
import Usuario from './Usuario'

function Demo2() {

    const [valor, setValor] = useState(0)
    const [usuario, setUsuario] = useState('')
  
    return (
    <div className='container-demo2'>
        <h2>useState</h2>
        <button onClick={() => {setValor(valor-1)}}>-</button>
        {valor}
        <button onClick={() => {setValor(valor+1)}}>+</button>

        <button onClick={() => {setUsuario(prompt('Username:'))}}>Fazer Login</button>
        {/* {usuario && <p>Olá {usuario}!</p>} */}

        {usuario ? <p>Olá {usuario}!</p> : <p>Faça Login!</p>}

        <Usuario username={usuario}/>
    </div>
  )
}

export default Demo2