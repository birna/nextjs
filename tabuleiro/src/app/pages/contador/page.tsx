"use client";

import { useState } from "react"
import styles from "./Contador.module.css"

export default function Contador() {

    const [number, setNumber] = useState(0)

    const soma = () => setNumber(number + 1)
    const subtrai = () => setNumber(number - 1)

    return (
        <div className={styles.contador}>
            <button className={styles.botoes} onClick={soma}>
                +
            </button>
            <button className={styles.botoes} onClick={subtrai}>
                -
            </button>

            <span>Numero: {number}</span>
        </div>
    )
}