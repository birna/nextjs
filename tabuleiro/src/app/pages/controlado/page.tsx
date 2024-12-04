"use client";
import { useState } from "react"
import styles from './Controlado.module.css'

export default function Controlado() {

    const [valor, setValor] = useState('') //PASSAR undefined tira o controle e null da erro!

    const inserirExclamacao = () => setValor(valor + "!")

    return (
        <div>
            <input className={styles.input} type="text" value={valor}
                onChange={e => setValor(e.target.value)}
            /> 
            <button className={styles.botoes} onClick={inserirExclamacao}>
                !
            </button>
        </div>
    )
}