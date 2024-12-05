"use client";

import { useState } from "react"
import styles from "./Mouse.module.css"

export default function mouse() {

    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    function quandoMover(ev: any) {
        setX(ev.clientX)
        alterarY(ev.clientY)
        
    }

    return (
        <div className={styles.mouse} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}