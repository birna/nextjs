"use client";
import styles from "./Filhos.module.css"

export default function Filhos(props) {
    console.log(props.funcao)
    
    return (
        <div>
            <button className={styles.filhos} onClick={props.funcao}>
                Falar com o Pai #1
            </button>
            
            <button className={styles.filhos} onClick={
                () => props.funcao("Passei no enem", "Uhuuu", 10)}
            >
                Falar com o Pai #2
            </button>
        </div>
    )
}